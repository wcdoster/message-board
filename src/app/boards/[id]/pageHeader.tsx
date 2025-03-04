"use client";
import { Button } from "@/components/Button";
import { JoinButton } from "@/components/JoinButton";
import { Board } from "@/data/boards/types";
import { useAuthContext } from "@/util/authProvider";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { FC } from "react";

interface PageHeaderProps {
  board: Board;
}

export const PageHeader: FC<PageHeaderProps> = ({ board }) => {
  const { user } = useAuthContext();
  return (
    <div className="flex flex-row justify-between h-[64px]">
      <p className="text-3xl my-auto">{board?.title}</p>
      {user && (
        <div className="flex flex-row my-auto">
          <Link href={`/boards/${board.id}/create-post`}>
            <Button
              onClick={() => {}}
              // onClick={() => {
              //   router.push(`/boards/${board.id}/create-post`);
              // }}
              theme="dark"
            >
              <FontAwesomeIcon icon={faPlus} /> Create Post
            </Button>
          </Link>

          <JoinButton
            boardId={board.id}
            revalidate={() => {
              location.reload();
            }}
          />
        </div>
      )}
    </div>
  );
};
