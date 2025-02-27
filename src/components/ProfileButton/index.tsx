import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { FC, useEffect, useRef, useState } from "react";

export interface ProfileMenuOptions {
  text: string;
  onClick: () => void;
}

interface ProfileButtonProps {
  menuOptions: ProfileMenuOptions[];
}

export const ProfileButton: FC<ProfileButtonProps> = ({ menuOptions }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={ref}>
      <div className="pt-[10px] pr-4 hover:cursor-pointer">
        <FontAwesomeIcon
          size="2x"
          icon={faCircleUser}
          onClick={() => {
            setIsExpanded(!isExpanded);
          }}
        />
      </div>
      <div ref={ref} className="w-full">
        <ul
          onBlur={() => {
            setIsExpanded(false);
          }}
          className={clsx(
            "absolute top-[64px] right-0 w-[128px] transition-all ease-in-out delay-150 duration-300 overflow-hidden rounded-xl bg-gray-800",
            {
              "h-0 max-h-0": !isExpanded,
              "max-h-[1000]": isExpanded,
            },
          )}
        >
          {menuOptions.map((x, i) => (
            <li
              key={i}
              className="p-2 hover:bg-gray-800 rounded-e-lg hover:cursor-pointer hover:text-gray-400 text-center"
            >
              <p
                onClick={() => {
                  setIsExpanded(false);
                  x.onClick();
                }}
              >
                {x.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
