import { CreateCommentInput } from "./types";

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
