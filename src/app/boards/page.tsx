import { BoardCard } from "@/components/BoardCard";
import { getAllBoards } from "@/data/boards/requests";

export default async function Page() {
  const data = await getAllBoards();
  return (
    <div>
      {data.map((x, i) => (
        <BoardCard key={i} board={x} />
      ))}
    </div>
  );
}
