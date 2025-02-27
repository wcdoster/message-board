"use client";

import { BoardCard } from "@/components/BoardCard";
import { getBoardsByCreatedByUserId } from "@/data/boards/requests";
import { Board } from "@/data/boards/types";
import { useAuthContext } from "@/util/authProvider";
import { FC, useCallback, useEffect, useState } from "react";

export const YourCreatedBoards: FC = () => {
  const { user, token } = useAuthContext();
  const [boards, setBoards] = useState<Board[]>([]);

  const getBoards = useCallback(() => {
    if (user && token) {
      getBoardsByCreatedByUserId(user?.id, token).then((x) => {
        console.log(x);
        setBoards(x);
      });
    }
  }, [user, token]);

  useEffect(() => {
    getBoards();
  }, [getBoards]);
  return (
    <div>
      {boards?.map((x, i) => {
        return (
          <BoardCard key={i} board={x} revalidate={getBoards} removeButton />
        );
      })}
    </div>
  );
};
