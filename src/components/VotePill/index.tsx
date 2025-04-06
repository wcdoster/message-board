"use client";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { FC } from "react";
import { useVoteRequests } from "./util";

interface VotePillProps {
  netVotes: number;
  commentId: string;
}

export const VotePill: FC<VotePillProps> = ({ netVotes, commentId }) => {
  const {
    downvote,
    loading,
    upvote,
    userHasDownvote,
    userHasUpvote,
    removeDownvote,
    removeUpvote,
  } = useVoteRequests(commentId);

  return (
    <div className="flex flex-row flex-start basis-auto p-1 rounded-3xl bg-gray-100 dark:bg-gray-700 w-auto">
      <FontAwesomeIcon
        className={clsx("my-auto mx-2", {
          "hover:cursor-pointer hover:text-green-600":
            !loading && !userHasDownvote,
          "text-green-600": userHasUpvote,
        })}
        icon={faArrowUp}
        onClick={() => {
          if (loading || userHasDownvote) return;
          if (!userHasUpvote) upvote();
          else if (userHasUpvote) removeUpvote();
        }}
      />
      <p className="px-1">{netVotes}</p>
      <FontAwesomeIcon
        className={clsx("my-auto mx-2", {
          "hover:cursor-pointer hover:text-red-600": !loading && !userHasUpvote,
          "text-red-600": userHasDownvote,
        })}
        icon={faArrowDown}
        onClick={() => {
          if (loading || userHasUpvote) return;
          if (!userHasDownvote) downvote();
          else if (userHasDownvote) removeDownvote();
        }}
      />
    </div>
  );
};
