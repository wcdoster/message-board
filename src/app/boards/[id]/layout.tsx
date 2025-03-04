// import { getBoardById } from "@/data/boards/requests";
// import { BoardInfo } from "./boardInfo";

// export default async function Layout({
//   children,
//   params,
// }: Readonly<{
//   children: React.ReactNode;
//   params: Promise<{ id: string }>;
// }>) {
//   const { id } = await params;
//   const boardInfo = await getBoardById(id);
//   return (
//     <div className="flex flex-row justify-around gap-16">
//       <div className="max-w-6xl mx-auto grow lg:basis-2/3">{children}</div>
//       <div className=" hidden md:block lg:basis-1/3">
//         <BoardInfo board={boardInfo} />
//       </div>
//     </div>
//   );
// }

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="mx-auto">{children}</div>;
}
