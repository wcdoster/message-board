import { UserInfo } from "./types";

export const getUserInfo = async (
  userId: string,
  token: string,
): Promise<UserInfo | null> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/users/${userId}`,
      { headers: { Authorization: `Bearer ${token}` } },
    );
    if (!response.ok) {
      throw new Error(response.status.toString());
    }
    const user = await response.json();
    return user;
  } catch {
    return null;
  }
};
