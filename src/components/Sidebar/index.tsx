import { faHouse, faSignsPost } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { FC } from "react";
import { CollapsibleMenu } from "../CollapsibleMenu";
import { BoardMenu } from "./boardMenu";

export const Sidebar: FC = () => {
  return (
    <div className="sticky top-[64px] w-56 p-4 h-[calc(100vh-64px)] border-r border-black dark:border-gray-600 overflow-hidden">
      <div>
        <Link
          href={"/"}
          className="flex flex-row justify-start px-4 py-2 text-lg hover:bg-gray-800 rounded-lg"
        >
          <span className="mr-4 w-8 text-center">
            <FontAwesomeIcon icon={faHouse} />
          </span>
          <p className="text-lg rounded-lg hover:bg-gray-800">Home</p>
        </Link>
        <BoardMenu />
        <CollapsibleMenu
          menuIcon={faSignsPost}
          menuName="Posts"
          menuItems={[
            { href: "/boards", label: "Your Posts" },
            { href: "/", label: "Following" },
          ]}
        />
      </div>
    </div>
  );
};
