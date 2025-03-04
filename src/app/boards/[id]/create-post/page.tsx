import { getBoardById } from "@/data/boards/requests";
import { CreatePostForm } from "./createPostForm";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;
  const boardInfo = await getBoardById(id);
  return (
    <>
      <p className="text-xl">Create Post</p>
      <p className="text-lg">{boardInfo.title}</p>
      <CreatePostForm boardId={boardInfo.id} />
    </>
  );
}
