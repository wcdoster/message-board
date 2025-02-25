"use client";
import clsx from "clsx";
import { FC, ReactNode } from "react";

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
  theme: "primary" | "secondary" | "warning" | "login";
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  theme,
  type,
  disabled,
}) => {
  const buttonClassNames = clsx("rounded px-4 py-2 font-bold text-white m-2", {
    "bg-blue-500 hover:bg-blue-700": theme === "primary" && !disabled,
    "bg-orange-700 hover:bg-orange-900": theme === "login" && !disabled,
    "bg-gray-800": disabled === true,
  });
  return (
    <button
      className={buttonClassNames}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
