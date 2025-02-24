import { Board } from "../types";

export const getBoardById = async (id: string): Promise<Board> => {
  const response = await fetch(`${process.env.API_URL}/boards/${id}`);
  if (!response.ok) {
    throw new Error(response.status.toString());
  }
  const board = await response.json();
  return board;
};

export const getAllBoards = async (): Promise<Board[]> => {
  const response = await fetch(`${process.env.API_URL}/boards`);
  if (!response.ok) {
    throw new Error(response.status.toString());
  }
  const boards = await response.json();
  return boards;
};
