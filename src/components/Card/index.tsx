import { FC, ReactNode } from "react";

interface CardProps {
  header?: string;
  children?: ReactNode;
}

export const Card: FC<CardProps> = ({ children }) => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 m-8">
      {children}
    </div>
  );
};
