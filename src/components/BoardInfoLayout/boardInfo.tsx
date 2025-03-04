import { Card } from "@/components/Card";
import { Board } from "@/data/boards/types";
import moment from "moment";
import { FC } from "react";

interface BoardInfoProps {
  board: Board;
}

export const BoardInfo: FC<BoardInfoProps> = ({ board }) => {
  return (
    <Card>
      <p>{board.title}</p>
      <p>{board.description}</p>
      <p>{board.memberCount}</p>
      <p>{board.createdBy.username}</p>
      <p>{moment(board.createdAt).format("MM DD, YYYY")}</p>
    </Card>
  );
};
