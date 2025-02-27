"use client";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { FC } from "react";
import { Profile } from "../Profile";
import { Search } from "../Search";

export const Header: FC = () => {
  return (
    <div className="sticky top-0 flex h-16 flex-row justify-between border-b border-black dark:border-gray-600 dark:bg-black bg-white bg-opacity-100 p-[4px]">
      <div className="lg:ml-4 ml-16 text-orange-700">
        <Link href="/">
          <FontAwesomeIcon size="3x" icon={faBlog} />
        </Link>
      </div>
      <Search />
      <Profile />
    </div>
  );
};
