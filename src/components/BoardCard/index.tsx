"use client";
import { Board } from "@/data/boards/types";
import { useAuthContext } from "@/util/authProvider";
import Link from "next/link";
import { FC } from "react";
import { Card } from "../Card";
import { JoinButton } from "../JoinButton";

interface BoardCardProps {
  board: Board;
  removeButton?: boolean;
  revalidate?: () => void;
}

export const BoardCard: FC<BoardCardProps> = ({
  board,
  removeButton,
  revalidate,
}) => {
  const { user } = useAuthContext();

  return (
    <div className="h-full">
      <Link href={`/boards/${board.id}`}>
        <Card>
          <div className="flex flex-row justify-between mb-2">
            <div className="">
              <p className="text- overflow-hidden whitespace-nowrap text-ellipsis">
                {board.title}
              </p>
              <p className="text-sm">
                {parseInt(board.memberCount.toString())} Members
              </p>
            </div>
            {user && !removeButton && (
              <div className="h-[40px]">
                <JoinButton boardId={board.id} revalidate={revalidate} />
              </div>
            )}
          </div>
          <div className="">
            <p className="text-sm">{board.description}</p>
          </div>
        </Card>
      </Link>
    </div>
  );
};
