"use client";

import { useAuthContext } from "@/util/authProvider";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dynamic from "next/dynamic";
import Link from "next/link";
import { FC } from "react";
import { LoginButton } from "../Login";

const Search = dynamic(() => import("../Search").then((mod) => mod.Search));
const Profile = dynamic(() => import("../Profile").then((mod) => mod.Profile));

export const Header: FC = () => {
  const { userId } = useAuthContext();
  console.log(userId);
  return (
    <div className="sticky top-0 flex h-16 flex-row justify-between border-b border-black dark:border-gray-600 dark:bg-black bg-white bg-opacity-100 p-[4px]">
      <div className="lg:ml-4 ml-16 text-orange-700">
        <Link href="/">
          <FontAwesomeIcon size="3x" icon={faBlog} />
        </Link>
      </div>
      <Search />
      {userId ? <Profile /> : <LoginButton />}
    </div>
  );
};
