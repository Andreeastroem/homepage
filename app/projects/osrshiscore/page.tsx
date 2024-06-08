import { getStatsByGamemode } from "osrs-json-hiscores";
import PlayerCards from "./PlayerCard/PlayerCards";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function Page({
  searchParams: { name },
}: {
  searchParams: { name: string | string[] };
}) {
  const hasNoName = !name || name.length === 0;

  return (
    <div className="bg-gradient-to-br relative from-orange-600 to-yellow-600 w-full min-h-screen">
      <div className="max-w-[600px] mx-auto p-4">
        <Link href="/projects">🔙</Link>
        {hasNoName ? <NoUsers /> : <Players name={name} />}
      </div>
    </div>
  );
}

function NoUsers() {
  return (
    <>
      <h1 className="text-3xl">OSRS multiscore</h1>
      <p>No names provided</p>
    </>
  );
}

async function Players({ name }: { name: string | string[] }) {
  const usernames = Array.isArray(name) ? name : [name];

  const data = await Promise.all(
    usernames.map(async (name) => {
      const stats = await getStatsByGamemode(name);
      return {
        name,
        stats,
      };
    })
  );

  return <PlayerCards players={data} />;
}

function AddUser() {
  return (
    <div>
      <input type="text" name="" />
      <button>Add</button>
    </div>
  );
}
