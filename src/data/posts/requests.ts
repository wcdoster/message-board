import { CreatePostInput, Post } from "./types";

export const getPostsByBoardId = async (id: string): Promise<[]> => {
  const response = await fetch(`${process.env.API_URL}/boards/${id}/posts`);
  if (!response.ok) {
    throw new Error(response.status.toString());
  }
  const posts = await response.json();
  return posts;
};

export const createPost = async (
  opts: CreatePostInput,
  token: string,
): Promise<Post> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title: opts.title,
      description: opts.description,
      createdByUserId: opts.createdByUserId,
      boardId: opts.boardId,
    }),
  });
  if (!response.ok) {
    throw new Error(response.status.toString());
  }
  const post = await response.json();
  return post;
};
