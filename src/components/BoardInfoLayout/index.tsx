import { Board } from "@/data/boards/types";
import { FC, ReactNode } from "react";
import { BoardInfo } from "./boardInfo";

interface BoardInfoLayoutProps {
  children: ReactNode;
  boardInfo: Board;
}

export const BoardInfoLayout: FC<BoardInfoLayoutProps> = ({
  boardInfo,
  children,
}) => {
  return (
    <div className="flex flex-row justify-around gap-16">
      <div className="max-w-6xl mx-auto grow md:basis-3/4">{children}</div>
      <div className=" hidden md:block md:basis-1/4 grow">
        <BoardInfo board={boardInfo} />
      </div>
    </div>
  );
};
