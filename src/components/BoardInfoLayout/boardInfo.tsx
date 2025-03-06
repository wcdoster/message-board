import { Board } from "@/data/boards/types";
import { faSignsPost, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import { FC } from "react";

interface BoardInfoProps {
  board: Board;
}

export const BoardInfo: FC<BoardInfoProps> = ({ board }) => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-900 dark:bg-gray-900">
      <p>
        <b>{board.title}</b>
      </p>
      <p className="text-sm">{board.description}</p>
      <p className="text-sm">
        <FontAwesomeIcon width={16} icon={faUsers} /> {board._count.members}{" "}
        member
        {board._count.members !== 1 && "s"}
      </p>
      <p className="text-sm">
        <FontAwesomeIcon width={16} icon={faSignsPost} /> {board._count.posts}{" "}
        post
        {board._count.members !== 1 && "s"}
      </p>
      <p className="text-sm">Created By: {board.createdBy.username}</p>
      <p className="text-sm">
        Created {moment(board.createdAt).format("MMM DD, YYYY")}
      </p>
    </div>
  );
};
