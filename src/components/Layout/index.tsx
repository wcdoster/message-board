import { FC, ReactNode } from "react";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";

interface MainLayoutProps {
  children?: ReactNode;
}

export const MainLayout: FC = ({ children }) => {
  return (
    <div className="flex">
      <aside className="sticky top-0">
        <Header />
        <Sidebar />
      </aside>
      <main>{children}</main>
    </div>
  );
};
