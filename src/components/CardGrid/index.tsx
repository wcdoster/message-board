import { FC, ReactNode } from "react";

interface CardGridProps {
  children: ReactNode;
}

export const CardGrid: FC<CardGridProps> = ({ children }) => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      {children}
    </div>
  );
};
