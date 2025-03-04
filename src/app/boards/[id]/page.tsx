import { getBoardById } from "@/data/boards/requests";
import { getPostsByBoardId } from "@/data/posts/requests";
import { PageHeader } from "./pageHeader";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;
  const boardInfo = await getBoardById(id);
  const posts = await getPostsByBoardId(id);
  console.log(posts);
  return (
    <>
      <PageHeader board={boardInfo} />
      {!posts.length && (
        <p className="text-lg">No posts yet. Be the first to post!</p>
      )}
    </>
  );
}
