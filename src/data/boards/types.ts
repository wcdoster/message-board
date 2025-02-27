import { User } from "../types";

export type Board = {
  id: string;
  title: string;
  description: string;
  createdByUserId: string;
  createdAt: string;
  createdBy: User;
  memberCount: number | string;
};
