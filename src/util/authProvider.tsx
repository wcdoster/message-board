"use client";

import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

interface UserContext {
  userId: string | null | undefined;
  authToken: string | null;
  login:
    | ((userName: string, password: string) => Promise<boolean | void>)
    | null;
  register:
    | ((
        email: string,
        userName: string,
        password: string,
      ) => Promise<boolean | void>)
    | null;
  logout: (() => void) | null;
  error: string | null;
  loading: boolean;
  clearAuthState: () => void;
}

const AuthContext = createContext<UserContext>({
  userId: undefined,
  authToken: null,
  login: async () => {},
  register: async () => {},
  logout: () => {},
  error: null,
  loading: false,
  clearAuthState: () => {},
});

interface ProviderProps {
  children: ReactNode;
}

const cookieName = "jwtCookie";
const url = process.env.NEXT_PUBLIC_API_URL;

export const AuthProvider = ({ children }: ProviderProps) => {
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null | undefined>();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const verifyToken = useCallback(async (token: string): Promise<void> => {
    const res = await fetch(url + "/verify-token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.status !== 200) {
      logout();
    } else {
      setAuthToken(token);
      setUserId(jwtDecode<{ userId: string }>(token).userId);
    }
  }, []);

  useEffect(() => {
    const jwtCookie = Cookies.get(cookieName);
    console.log(jwtCookie);
    if (jwtCookie) {
      verifyToken(jwtCookie);
    }
  }, [verifyToken]);

  const login = async (email: string, password: string): Promise<boolean> => {
    setLoading(true);
    try {
      const res = await fetch(url + "/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (res.status === 401) {
        setError("Invalid username or password.");
        setLoading(false);
        return false;
      }
      const response = await res.json();
      const token = response.token;
      const userId = response.userId;
      if (token && userId) {
        setAuthToken(token);
        setUserId(userId);
        Cookies.set(cookieName, token);
        setLoading(false);
        return true;
      }
      setLoading(false);
      return false;
    } catch {
      setLoading(false);
      setError("There was a problem logging in.");
      return false;
    }
  };

  const logout = () => {
    Cookies.remove(cookieName);
    setAuthToken(null);
    setUserId(null);
  };

  const register = async (
    username: string,
    email: string,
    password: string,
  ): Promise<boolean> => {
    setLoading(true);
    try {
      const res = await fetch(url + "/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, username }),
      });
      const response = await res.json();

      if (res.status === 409) {
        if (response.email) {
          setError("An account with that email already exists.");
        } else if (response.username) {
          setError("An account with that username already exists.");
        }
        setLoading(false);
        return false;
      }

      const token = response.token;
      const userId = response.userId;
      if (token && userId) {
        setAuthToken(token);
        setUserId(userId);
        Cookies.set(cookieName, token);
        setLoading(false);
        return true;
      }
      setLoading(false);
      return false;
    } catch {
      setLoading(false);
      setError("There was a problem logging in.");
      return false;
    }
  };

  const clearAuthState = () => {
    setLoading(false);
    setError(null);
  };

  const value = {
    authToken,
    login,
    userId,
    logout,
    error,
    loading,
    clearAuthState,
    register,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  return {
    login: context.login,
    logout: context.logout,
    token: context.authToken,
    userId: context.userId,
    loading: context.loading,
    error: context.error,
    clearAuthState: context.clearAuthState,
    register: context.register,
  };
};
