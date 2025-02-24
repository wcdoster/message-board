"use client";
import {
  faCircleXmark,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useState } from "react";

export const Search: FC = () => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div className="grow text-center">
      <input
        type="text"
        id="search"
        name="search"
        className="m-2 w-full max-w-xl rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        placeholder="Search"
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            console.log("pressed enter");
          }
        }}
      />
      <span className="-ml-10">
        {searchInput.length ? (
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="hover:cursor-pointer"
            onClick={() => {
              setSearchInput("");
            }}
          />
        ) : (
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        )}
      </span>
    </div>
  );
};
