import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { FC } from "react";
import { BoardMenu } from "./boardMenu";

export const Sidebar: FC = () => {
  return (
    <div className="sticky top-[64px] w-40 h-[calc(100vh-64px)] border-r border-black dark:border-gray-600">
      <div className="text-center">
        <Link href={"/"}>
          <p className="text-lg">
            <span>
              <FontAwesomeIcon icon={faHouse} />
            </span>
            {"  "}
            Home
          </p>
        </Link>
        <BoardMenu />
      </div>
    </div>
  );
};
