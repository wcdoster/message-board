import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";

interface VotePillProps {
  netVotes: number;
}

export const VotePill: FC<VotePillProps> = ({ netVotes }) => {
  return (
    <div className="flex flex-row flex-start basis-auto p-1 rounded-3xl bg-gray-100 dark:bg-gray-700 w-auto">
      <FontAwesomeIcon className="my-auto mx-2" icon={faArrowUp} />
      <p className="px-1">{netVotes}</p>
      <FontAwesomeIcon className="my-auto mx-2" icon={faArrowDown} />
    </div>
  );
};
