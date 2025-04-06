"use client";
import { createDownvote, createUpvote } from "@/data/comments/requests";
import { useAuthContext } from "@/util/authProvider";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { FC, useCallback, useState } from "react";

interface VoteArrowProps {
  direction: "down" | "up";
  commentId: string;
}

export const VoteArrow: FC<VoteArrowProps> = ({ direction, commentId }) => {
  const { user, token } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const createVote = useCallback(() => {
    setLoading(true);
    if (user && token) {
      try {
        if (direction === "down") {
          createDownvote(
            { commentId: commentId, createdByUserId: user.id },
            token,
          );
        } else {
          createUpvote(
            { commentId: commentId, createdByUserId: user.id },
            token,
          );
        }
        setLoading(false);
      } catch {
        setLoading(false);
      }
    }
  }, [user, token, direction, commentId]);

  return (
    <FontAwesomeIcon
      className={clsx("my-auto mx-2", {
        "hover:cursor-pointer": !loading,
        "hover:text-green-600": !loading && direction === "up",
        "hover:text-red-600": !loading && direction === "down",
      })}
      icon={direction === "up" ? faArrowUp : faArrowDown}
      onClick={() => {
        createVote();
      }}
    />
  );
};
