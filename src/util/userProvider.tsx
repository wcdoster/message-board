import { createContext, ReactNode, useContext } from "react";

const UserContext = createContext({
  user: { id: "" },
});

interface ProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: ProviderProps) => {
  const value = {
    user: { id: "09b971eb-590e-4671-a9d6-ac2701d225da" },
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const UseWhoAmI = () => {
  const context = useContext(UserContext);
  return { user: context.user };
};
