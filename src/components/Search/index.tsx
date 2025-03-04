"use client";
import {
  faCircleXmark,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useState } from "react";
import { TextInput } from "../TextInput";

export const Search: FC = () => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div className="grow text-center px-4 max-w-xl">
      <TextInput
        id="search"
        name="search"
        placeholder="Search"
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
        onEnter={() => {
          console.log("pressed enter");
        }}
        extraMargin
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
