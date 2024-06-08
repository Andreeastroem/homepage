import { Sea } from "@/components/Sea";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <Sea />
      <div className="grid grid-cols-3 h-screen">
        <div className="bg-green-400 p-4">
          <h1>Projects</h1>
        </div>
        <div className="col-span-2 col-start-2 bg-blue-500 p-4">
          <Bouy href={"/projects/osrshiscore"}>OSRS hiscore</Bouy>
        </div>
      </div>
    </div>
  );
}

function Bouy({ children, href }: { children: string; href: string }) {
  return (
    <Link
      href={href}
      className="p-4 bg-white flex items-center w-fit rounded-full hover:bg-blue-100 border-red-600 border-solid border-4 aspect-square"
    >
      {children}
    </Link>
  );
}
