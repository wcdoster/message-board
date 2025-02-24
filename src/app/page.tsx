import { Card } from "@/components/Card";
import { getAllBoards } from "@/data/boards/requests";
import Link from "next/link";

export default async function Home() {
  const boards = await getAllBoards();
  return (
    <div>
      {boards.map((x, i) => {
        return (
          <Card key={i}>
            <Link href={`/boards/${x.id}`}>{x.title}</Link>
          </Card>
        );
      })}
    </div>
  );
}
