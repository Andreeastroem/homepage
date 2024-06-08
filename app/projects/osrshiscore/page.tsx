import { getStatsByGamemode } from "osrs-json-hiscores";
import PlayerCard from "./PlayerCard/PlayerCard";
import PlayerCards from "./PlayerCard/PlayerCards";

export const dynamic = "force-dynamic";

export default async function Page({
  searchParams: { name },
}: {
  searchParams: { name: string | string[] };
}) {
  if (!name || name.length === 0)
    return (
      <div className="bg-gradient-to-br relative from-orange-600 to-yellow-600 w-full min-h-screen">
        <div className="max-w-[600px] mx-auto p-4">
          <h1 className="text-3xl">OSRS multiscore</h1>
          <p>No names provided</p>
        </div>
      </div>
    );

  console.log("name", name);
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

  return (
    <div className="bg-gradient-to-br relative from-orange-600 to-yellow-600 w-full min-h-screen">
      <div className="max-w-[600px] mx-auto ">
        <PlayerCards players={data} />
      </div>
    </div>
  );
}
