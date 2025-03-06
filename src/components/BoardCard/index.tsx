"use client";
import { Board } from "@/data/boards/types";
import { useAuthContext } from "@/util/authProvider";
import { faSignsPost, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
                <FontAwesomeIcon width={16} icon={faSignsPost} />{" "}
                {parseInt(board._count.posts.toString())} Post
                {board._count.posts !== 1 && "s"}
              </p>
              <p className="text-sm">
                <FontAwesomeIcon width={16} icon={faUsers} />{" "}
                {parseInt(board._count.members.toString())} Member
                {board._count.members !== 1 && "s"}
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
