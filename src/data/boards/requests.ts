import { Board } from "./types";

export const getBoardById = async (id: string): Promise<Board> => {
  const response = await fetch(`${process.env.API_URL}/boards/${id}`);
  if (!response.ok) {
    throw new Error(response.status.toString());
  }
  const board = await response.json();
  return board;
};

export const getAllBoards = async (): Promise<Board[]> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/boards`);
    if (!response.ok) {
      throw new Error(response.status.toString());
    }
    const boards = await response.json();
    return boards;
  } catch {
    return [];
  }
};

export interface CreateBoardInput {
  title: string;
  description: string;
  createdByUserId: string;
}

export const createBoard = async (
  opts: CreateBoardInput,
  token: string,
): Promise<Board> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/boards`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title: opts.title,
      description: opts.description,
      createdByUserId: opts.createdByUserId,
    }),
  });
  if (!response.ok) {
    throw new Error(response.status.toString());
  }
  const board: Board = await response.json();
  return board;
};

export const getJoinedBoardsByUserId = async (
  userId: string,
  token: string,
) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/boards/members/${userId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  if (!response.ok) {
    throw new Error(response.status.toString());
  }
  const boards: Board[] = await response.json();
  return boards;
};

export const getBoardsByCreatedByUserId = async (
  userId: string,
  token: string,
) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/boards/createdBy/${userId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  if (!response.ok) {
    throw new Error(response.status.toString());
  }
  const boards: Board[] = await response.json();
  return boards;
};
