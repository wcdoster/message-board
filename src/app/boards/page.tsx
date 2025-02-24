import { Card } from "@/components/Card";
import { getAllBoards } from "@/data/boards/requests";
import Link from "next/link";

export default async function Page() {
  const data = await getAllBoards();
  return (
    <div>
      {data.map((x, i) => (
        <Card key={i}>
          <Link href={`/boards/${x.id}`}>{x.title}</Link>
        </Card>
      ))}
    </div>
  );
}
