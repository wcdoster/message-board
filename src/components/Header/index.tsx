import { FC } from "react";
import { LoginButton } from "../Login";
import { Search } from "../Search";

export const Header: FC = () => {
  return (
    <div className="sticky top-0 flex h-16 flex-row justify-between border-b border-black dark:border-gray-600 dark:bg-black bg-white bg-opacity-100">
      <h1 className="mt-4 text-xl">Message Board</h1>
      <Search />
      <LoginButton />
    </div>
  );
};
