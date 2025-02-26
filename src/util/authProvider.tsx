"use client";

import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { createContext, ReactNode, useContext, useState } from "react";

interface UserContext {
  userId: string | null | undefined;
  authToken: string | null;
  login:
    | ((userName: string, password: string) => Promise<boolean | void>)
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
  logout: () => {},
  error: null,
  loading: false,
  clearAuthState: () => {},
});

interface ProviderProps {
  children: ReactNode;
}

const cookieName = "jwtCookie";
const jwtCookie = Cookies.get(cookieName) ?? "";
const jwtUserId = jwtCookie
  ? jwtDecode<{ userId: string }>(jwtCookie).userId
  : null;

export const AuthProvider = ({ children }: ProviderProps) => {
  const [authToken, setAuthToken] = useState<string | null>(jwtCookie ?? null);
  const [userId, setUserId] = useState<string | null>(jwtUserId);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const url = process.env.NEXT_PUBLIC_API_URL;
  const login = async (email: string, password: string): Promise<boolean> => {
    setLoading(true);
    try {
      const response = await fetch(url + "/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }).then((x) => x.json());
      const token = response.token;
      const userId = response.userId;
      const error = response.error;
      console.log(response);
      if (error) {
        setError("Invalid username or password.");
        setLoading(false);
        return false;
      } else if (token && userId) {
        setAuthToken(token);
        setUserId(userId);
        Cookies.set(cookieName, token);
        setLoading(false);
        return true;
      }
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
  };
};
