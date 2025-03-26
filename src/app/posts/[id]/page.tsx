import { BoardInfoLayout } from "@/components/BoardInfoLayout";
import { getPostById } from "@/data/posts/requests";
import { PostPage } from "./postPage";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;
  const post = await getPostById(id);
  return (
    <BoardInfoLayout boardInfo={post.board}>
      <PostPage post={post} />
    </BoardInfoLayout>
  );
}
