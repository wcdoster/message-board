import { CreateCommentInput, CreateUpvoteDownvoteInput, Vote } from "./types";

export const createComment = async (
  opts: CreateCommentInput,
  token: string,
): Promise<Partial<Comment>> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      text: opts.text,
      createdByUserId: opts.createdByUserId,
      parentCommentId: opts.parentCommentId ?? null,
      postId: opts.postId,
    }),
  });
  if (!response.ok) {
    throw new Error(response.status.toString());
  }
  const comment = await response.json();
  return comment;
};

export const createDownvote = async (
  opts: CreateUpvoteDownvoteInput,
  token: string,
): Promise<Vote> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/comments/downvote`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        createdByUserId: opts.createdByUserId,
        commentId: opts.commentId,
      }),
    },
  );
  if (!response.ok) {
    throw new Error(response.status.toString());
  }
  const downvote = await response.json();
  return downvote;
};

export const createUpvote = async (
  opts: CreateUpvoteDownvoteInput,
  token: string,
): Promise<Vote> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/comments/upvote`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        createdByUserId: opts.createdByUserId,
        commentId: opts.commentId,
      }),
    },
  );
  if (!response.ok) {
    throw new Error(response.status.toString());
  }
  const upvote = await response.json();
  return upvote;
};

export const deleteUpvote = async (
  opts: CreateUpvoteDownvoteInput,
  token: string,
): Promise<Vote> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/comments/${opts.commentId}/upvote/`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        userId: opts.createdByUserId,
      }),
    },
  );
  if (!response.ok) {
    throw new Error(response.status.toString());
  }
  const upvote = await response.json();
  return upvote;
};

export const deleteDownvote = async (
  opts: CreateUpvoteDownvoteInput,
  token: string,
): Promise<Vote> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/comments/${opts.commentId}/downvote/`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        userId: opts.createdByUserId,
      }),
    },
  );
  if (!response.ok) {
    throw new Error(response.status.toString());
  }
  const downvote = await response.json();
  return downvote;
};
