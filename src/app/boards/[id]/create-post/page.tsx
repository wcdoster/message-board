import { BoardInfoLayout } from "@/components/BoardInfoLayout";
import { getBoardById } from "@/data/boards/requests";
import { CreatePostForm } from "./createPostForm";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;
  const boardInfo = await getBoardById(id);
  return (
    <BoardInfoLayout boardInfo={boardInfo}>
      <p className="text-xl">Create Post</p>
      <CreatePostForm boardId={boardInfo.id} />
    </BoardInfoLayout>
  );
}
