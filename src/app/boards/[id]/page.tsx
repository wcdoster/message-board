import { BoardInfoLayout } from "@/components/BoardInfoLayout";
import { PostCard } from "@/components/PostCard";
import { getBoardById } from "@/data/boards/requests";
import { getPostsByBoardId } from "@/data/posts/requests";
import { PageHeader } from "./pageHeader";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;
  const boardInfo = await getBoardById(id);
  const posts = await getPostsByBoardId(id);
  return (
    <>
      <PageHeader board={boardInfo} />
      <BoardInfoLayout boardInfo={boardInfo}>
        {!posts.length && (
          <p className="text-lg">No posts yet. Be the first to post!</p>
        )}
        {posts.map((x, i) => {
          return <PostCard post={x} key={i} />;
        })}
      </BoardInfoLayout>
    </>
  );
}
