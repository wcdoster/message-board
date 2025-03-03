import { BoardCard } from "@/components/BoardCard";
import { CardGrid } from "@/components/CardGrid";
import { getAllBoards } from "@/data/boards/requests";

export default async function Page() {
  const data = await getAllBoards();
  return (
    <CardGrid>
      {data.map((x, i) => (
        <BoardCard key={i} board={x} />
      ))}
    </CardGrid>
  );
}
