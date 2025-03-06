"use client";
import {
  faBars,
  faHouse,
  faSignsPost,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Link from "next/link";
import { FC, useState } from "react";
import { CollapsibleMenu } from "../CollapsibleMenu";
import { BoardMenu } from "./boardMenu";

export const Sidebar: FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  //TODO: firgure out good way to collapse menu on outside click or navigation
  // useEffect(() => {
  //   console.log()
  //   if (isExpanded === true) {
  //     document.addEventListener("click", () => {
  //       setIsExpanded(false);
  //     });
  //   } else {
  //     console.log("this runs");
  //     document.removeEventListener("click", () => {
  //       setIsExpanded(false);
  //     });
  //   }
  // }, [isExpanded]);

  return (
    <>
      <div
        className="fixed top-0 lg:hidden mt-4 ml-4 hover:cursor-pointer"
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}
      >
        <FontAwesomeIcon size="2x" icon={faBars} />
      </div>
      <div
        className={clsx(
          "lg:sticky absolute lg:top-[64px] lg:w-56 lg:p-4 h-[calc(100vh-64px)] lg:border-r border-black dark:border-gray-600 dark:bg-black bg-white overflow-hidden transition-all ease-in-out delay-150 duration-300 opacity-100",
          { "w-0 p-0": !isExpanded, "w-56 border-r p-4": isExpanded },
        )}
      >
        <div>
          <Link
            href={"/"}
            className="flex flex-row justify-start px-4 py-2 text-lg hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
          >
            <span className="mr-4 w-8 text-center">
              <FontAwesomeIcon icon={faHouse} />
            </span>
            <p className="text-lg rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
              Home
            </p>
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
    </>
  );
};
