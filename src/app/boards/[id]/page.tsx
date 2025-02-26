import { getBoardById } from "@/data/boards/requests";

export default async function Page({ params }: { params: { id: string } }) {
  const data = await getBoardById(params.id);
  return <p>{data?.title}</p>;
}
