import { BoardCard } from "@/components/BoardCard";
import { getAllBoards } from "@/data/boards/requests";
import { revalidatePath } from "next/cache";

const revalidate = async () => {
  "use server";
  revalidatePath("/", "page");
};

export default async function Home() {
  const boards = await getAllBoards();
  return (
    <div>
      {boards?.map((x, i) => {
        return <BoardCard key={i} board={x} revalidate={revalidate} />;
      })}
    </div>
  );
}
