import { useAuthContext } from "@/util/authProvider";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { FC, useEffect, useRef, useState } from "react";

export const Profile: FC = () => {
  const { logout } = useAuthContext();
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
              "h-full max-h-[1000]": isExpanded,
            },
          )}
        >
          <li className="p-2 hover:bg-gray-800 rounded-e-lg hover:cursor-pointer hover:text-gray-400 text-center">
            <p
              onClick={() => {
                if (logout) {
                  logout();
                }
              }}
            >
              Logout
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
