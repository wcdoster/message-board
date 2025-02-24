export type User = {
  username: string;
  email: string;
  id: string;
};

export type Board = {
  id: string;
  title: string;
  description: string;
  createdByUserId: string;
  createdAt: string;
  createdBy: User;
};
