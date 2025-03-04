"use client";

import { addMember, removeMember } from "@/data/members/requests";
import { useAuthContext } from "@/util/authProvider";
import { FC, useMemo } from "react";
import { Button } from "../Button";

interface JoinButtonProps {
  revalidate?: () => void;
  boardId: string;
}

export const JoinButton: FC<JoinButtonProps> = ({ revalidate, boardId }) => {
  const { user, token, refetchUser } = useAuthContext();
  const userIsMember = useMemo(
    () => Boolean(user?.joinedBoards.find((x) => x.boardId === boardId)),
    [boardId, user],
  );
  const handleJoinClick = async () => {
    if (user && token) {
      const added = await addMember(
        { userId: user.id, boardId: boardId },
        token,
      );
      if (added) {
        refetchUser();
        if (revalidate) {
          revalidate();
        }
      }
    }
  };
  const handleUnjoinClick = async () => {
    if (user && token) {
      const removed = await removeMember(
        { userId: user.id, boardId: boardId },
        token,
      );
      if (removed) {
        refetchUser();
        if (revalidate) {
          revalidate();
        }
      }
    }
  };
  return userIsMember ? (
    <Button
      theme="dark"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        handleUnjoinClick();
      }}
    >
      Joined
    </Button>
  ) : (
    <Button
      theme="primary"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        handleJoinClick();
      }}
    >
      Join
    </Button>
  );
};
