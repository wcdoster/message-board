export interface AddRemoveMemberInput {
  userId: string;
  boardId: string;
}

export const addMember = async (
  opts: AddRemoveMemberInput,
  token: string,
): Promise<boolean> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/members`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        userId: opts.userId,
        boardId: opts.boardId,
      }),
    });
    if (!response.ok) {
      throw new Error(response.status.toString());
    }
    return true;
  } catch {
    return false;
  }
};

export const removeMember = async (
  opts: AddRemoveMemberInput,
  token: string,
): Promise<boolean> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/members`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        userId: opts.userId,
        boardId: opts.boardId,
      }),
    });
    if (!response.ok) {
      throw new Error(response.status.toString());
    }
    return true;
  } catch {
    return false;
  }
};
