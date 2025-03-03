"use client";
import { Board } from "@/data/boards/types";
import { addMember, removeMember } from "@/data/members/requests";
import { useAuthContext } from "@/util/authProvider";
import Link from "next/link";
import { FC, useMemo } from "react";
import { Button } from "../Button";
import { Card } from "../Card";

interface BoardCardProps {
  board: Board;
  revalidate?: () => void;
  removeButton?: boolean;
}

export const BoardCard: FC<BoardCardProps> = ({
  board,
  revalidate,
  removeButton,
}) => {
  const { user, token, refetchUser } = useAuthContext();
  const userIsMember = useMemo(
    () => Boolean(user?.joinedBoards.find((x) => x.boardId === board.id)),
    [board, user],
  );
  const handleJoinClick = async () => {
    if (user && token) {
      const added = await addMember(
        { userId: user.id, boardId: board.id },
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
        { userId: user.id, boardId: board.id },
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
  return (
    <Card>
      <Link href={`/boards/${board.id}`}>
        <div className="flex flex-row justify-between mb-2">
          <div className="">
            <p className="text- overflow-hidden whitespace-nowrap text-ellipsis">
              {board.title}
            </p>
            <p className="text-sm">
              {parseInt(board.memberCount.toString())} Members
            </p>
          </div>
          {user && (
            <div className="h-[40px]">
              {userIsMember && !removeButton ? (
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
              )}
            </div>
          )}
        </div>
        <div className="">
          <p className="text-sm">{board.description}</p>
        </div>
      </Link>
    </Card>
  );
};
