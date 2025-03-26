export interface CreateCommentInput {
  text: string;
  createdByUserId: string;
  parentCommentId?: string | null | undefined;
  postId: string;
}

export interface Comment {
  _count: { upvotes: number; downvotes: number };
  createdAt: string;
  createdBy: {
    id: string;
    username: string;
  };
  id: string;
  text: string;
  updatedAt: string;
  parentCommentId: string;
  subComments?: Comment[];
}
