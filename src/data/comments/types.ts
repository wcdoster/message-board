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

export interface CreateUpvoteDownvoteInput {
  createdByUserId: string;
  commentId: string;
}

export interface Vote {
  commentId: string;
  createdAt: string;
  createdByUserId: string;
  id: string;
}
