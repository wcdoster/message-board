"use client";
import {
  faAngleDown,
  faAngleUp,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { FC, useState } from "react";

export const BoardMenu: FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      <div
        onClick={(e) => {
          e.preventDefault();
          setIsExpanded(!isExpanded);
        }}
        className="flex flex-row justify-between p-4 hover:cursor-pointer"
      >
        <span>
          <FontAwesomeIcon icon={faList} />
        </span>
        <p>Boards</p>
        <span>
          <FontAwesomeIcon icon={isExpanded ? faAngleDown : faAngleUp} />
        </span>
      </div>
      {isExpanded && (
        <ul className="transition-discrete">
          <li>
            <Link href="/">Your Boards</Link>
          </li>
          <li>
            <Link href="/">Following</Link>
          </li>
          <li>
            <Link href="/">All Boards</Link>
          </li>
        </ul>
      )}
    </>
  );
};
