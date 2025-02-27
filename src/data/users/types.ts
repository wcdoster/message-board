export interface UserInfo {
  upvotes: { id: string; comment: { id: string } }[];
  downvotes: { id: string; comment: { id: string } }[];
  boards: { id: string }[];
  email: string;
  id: string;
  username: string;
  joinedBoards: { boardId: string }[];
  comments: { id: string }[];
  posts: { id: string }[];
}
