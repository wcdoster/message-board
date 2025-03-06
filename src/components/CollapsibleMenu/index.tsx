"use client";

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Link from "next/link";
import { FC, useState } from "react";

interface MenuItem {
  label: string;
  href?: string;
  action?: () => void;
}

interface CollapsibleMenuProps {
  menuItems: MenuItem[];
  menuName: string;
  menuIcon: IconProp;
}

export const CollapsibleMenu: FC<CollapsibleMenuProps> = ({
  menuIcon,
  menuItems,
  menuName,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      <div
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsExpanded(!isExpanded);
        }}
        className="flex flex-row justify-between px-4 py-2 hover:cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-lg select-none"
      >
        <div className="flex flex-row justify-start">
          <div className="mr-4 pt-1 w-8 flex justify-center">
            <FontAwesomeIcon icon={menuIcon} />
          </div>
          <p>{menuName}</p>
        </div>
        <span>
          <FontAwesomeIcon
            icon={faAngleDown}
            className={clsx("transition-all delay-150 duration-300", {
              "rotate-180": isExpanded,
            })}
          />
        </span>
      </div>
      <div className="pl-8 w-full">
        <ul
          className={clsx(
            "transition-all ease-in-out delay-150 duration-300 overflow-hidden w-full border-l border-gray-700",
            {
              "h-0 max-h-0": !isExpanded,
              "h-full max-h-[1000]": isExpanded,
            },
          )}
        >
          {menuItems.map((x, i) => (
            <li
              key={i}
              className="pl-8 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-l hover:border-gray-600 rounded-e-lg hover:cursor-pointer"
            >
              {x.href ? (
                <Link href={x.href}>{x.label}</Link>
              ) : (
                <p
                  onClick={() => {
                    if (x.action) {
                      x.action();
                    }
                  }}
                >
                  {x.label}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
