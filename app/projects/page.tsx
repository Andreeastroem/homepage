import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Projects</h1>
      <Link href={"/projects/osrshiscore"}>OSRS hiscore</Link>
    </div>
  );
}
