"use client";

import { BoardCard } from "@/components/BoardCard";
import { CardGrid } from "@/components/CardGrid";
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
        setBoards(x);
      });
    }
  }, [user, token]);

  useEffect(() => {
    getBoards();
  }, [getBoards]);
  return (
    <CardGrid>
      {boards?.map((x, i) => {
        return (
          <BoardCard key={i} board={x} removeButton />
        );
      })}
    </CardGrid>
  );
};
