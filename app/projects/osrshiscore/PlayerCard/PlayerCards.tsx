"use client";

import { Stats } from "osrs-json-hiscores";
import PlayerCard from "./PlayerCard";
import { useState } from "react";
import { motion, LayoutGroup } from "framer-motion";

type Props = {
  players: { name: string; stats: Stats }[];
};

export default function PlayerCards({ players }: Props) {
  const [selectedPlayer, setSelectedPlayer] = useState<number>(-1);
  return (
    <motion.div
      className={`flex flex-col relative gap-4 p-4 min-h-[inherit] flex-wrap`}
    >
      {players.map((user, idx) => {
        return (
          <PlayerCard
            key={user.name}
            onClick={() => {
              setSelectedPlayer((prev) => (prev === idx ? -1 : idx));
            }}
            name={user.name}
            stats={user.stats}
            active={selectedPlayer === idx}
            index={idx}
          />
        );
      })}
    </motion.div>
  );
}
