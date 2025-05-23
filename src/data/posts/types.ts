import { Board } from "../boards/types";

export interface CreatePostInput {
  description: string;
  title: string;
  boardId: string;
  createdByUserId: string;
}

export interface Post {
  id: string;
  title: string;
  description: string;
  createdByUserId: string;
  createdAt: Date;
  boardId: string;
  createdBy: {
    id: string;
    username: string;
  };
  board: Board;
  _count: { comments: number };
  comments: [];
}
