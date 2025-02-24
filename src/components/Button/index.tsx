'use client'
import clsx from "clsx";
import { FC, ReactNode } from "react";

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
  theme: "primary" | "secondary" | "warning" | "login";
}

export const Button: FC<ButtonProps> = ({ children, onClick, theme }) => {
  const buttonClassNames = clsx("rounded px-4 py-2 font-bold text-white m-2", {
    "bg-blue-500 hover:bg-blue-700": theme === "primary",
    "bg-orange-700 hover:bg-orange-900": theme === "login",
  });
  return (
    <button className={buttonClassNames} onClick={onClick}>
      {children}
    </button>
  );
};
