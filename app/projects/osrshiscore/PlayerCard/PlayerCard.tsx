"use client";

import Image from "next/image";
import { Stats as TStats } from "osrs-json-hiscores";

import { AnimatePresence, LayoutGroup, motion } from "framer-motion";

type Props = {
  name: string;
  stats: TStats;
  onClick: () => void;
  active: boolean;
  index: number;
};

const colors = [
  "from-amber-300/50 to-amber-500/50 border-amber-500",
  "from-blue-300/50 to-blue-500/50 border-blue-500",
  "from-cyan-300/50 to-cyan-500/50 border-cyan-500",
  "from-emerald-300/50 to-emerald-500/50 border-emerald-500",
  "from-fuchsia-300/50 to-fuchsia-500/50 border-fuchsia-500",
  "from-gray-300/50 to-gray-500/50 border-gray-500",
  "from-green-300/50 to-green-500/50 border-green-500",
  "from-indigo-300/50 to-indigo-500/50 border-indigo-500",
  "from-lime-300/50 to-lime-500/50 border-lime-500",
  "from-orange-300/50 to-orange-500/50 border-orange-500",
  "from-pink-300/50 to-pink-500/50 border-pink-500",
];

export default function PlayerCard({
  name,
  stats,
  onClick,
  active,
  index,
}: Props) {
  return (
    <motion.div
      onClick={onClick}
      className={`
        ${
          colors[index % colors.length]
        } bg-gradient-to-br hover:w-full text-white font-bold rounded-3xl border border-solid transition-all duration-300 ${
        active ? "w-full" : "w-1/2"
      }`}
    >
      <h2 className="w-full text-center text-2xl">{name}</h2>
      <motion.div
        className="grid grid-cols-3 md:grid-cols-6 p-8 gap-4"
        variants={statsAnimations}
        initial={"initial"}
        animate={"enter"}
      >
        {!active && (
          <Skill
            key={"overall"}
            src="/osrs-icons/overall.webp"
            alt="overall skill icon"
            level={stats.skills.overall.level}
            active={true}
          />
        )}
        <AnimatePresence mode="wait">
          {active && <Stats key={"user-stats"} stats={stats} active={active} />}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

const statsAnimations = {
  initial: {},
  enter: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

function Stats({
  stats: { skills },
  active,
}: {
  stats: TStats;
  active: boolean;
}) {
  return (
    <>
      <Skill
        src="/osrs-icons/Attack_icon.webp"
        alt="attack icon"
        level={skills.attack.level}
        active={active}
      />
      <Skill
        src="/osrs-icons/Defence_icon.webp"
        alt="defence icon"
        active={active}
        level={skills.defence.level}
      />
      <Skill
        src="/osrs-icons/Strength_icon.webp"
        alt="strength icon"
        active={active}
        level={skills.strength.level}
      />

      <Skill
        src="/osrs-icons/Hitpoints_icon.webp"
        alt="hitpoints icon"
        level={skills.hitpoints.level}
        active={active}
      />
      <Skill
        src="/osrs-icons/Ranged_icon.webp"
        alt="ranged icon"
        level={skills.ranged.level}
        active={active}
      />
      <Skill
        src="/osrs-icons/Prayer_icon.webp"
        alt="prayer icon"
        level={skills.prayer.level}
        active={active}
      />
      <Skill
        src="/osrs-icons/Magic_icon.webp"
        alt="magic icon"
        level={skills.magic.level}
        active={active}
      />
      <Skill
        src="/osrs-icons/Cooking_icon.webp"
        alt="cooking icon"
        level={skills.cooking.level}
        active={active}
      />
      <Skill
        src="/osrs-icons/Woodcutting_icon.webp"
        alt="woodcutting icon"
        level={skills.woodcutting.level}
        active={active}
      />
      <Skill
        src="/osrs-icons/Fletching_icon.webp"
        alt="fletching icon"
        level={skills.fletching.level}
        active={active}
      />
      <Skill
        src="/osrs-icons/Fishing_icon.webp"
        alt="fishing icon"
        level={skills.fishing.level}
        active={active}
      />
      <Skill
        src="/osrs-icons/Firemaking_icon.webp"
        alt="firemaking icon"
        level={skills.firemaking.level}
        active={active}
      />
      <Skill
        src="/osrs-icons/Crafting_icon.webp"
        alt="crafting icon"
        level={skills.crafting.level}
        active={active}
      />
      <Skill
        src="/osrs-icons/Smithing_icon.webp"
        alt="smithing icon"
        level={skills.smithing.level}
        active={active}
      />
      <Skill
        src="/osrs-icons/Mining_icon.webp"
        alt="mining icon"
        level={skills.mining.level}
        active={active}
      />
      <Skill
        src="/osrs-icons/Herblore_icon.webp"
        alt="herblore icon"
        level={skills.herblore.level}
        active={active}
      />
      <Skill
        src="/osrs-icons/Agility_icon.webp"
        alt="agility icon"
        level={skills.agility.level}
        active={active}
      />
      <Skill
        src="/osrs-icons/Thieving_icon.webp"
        alt="thieving icon"
        level={skills.thieving.level}
        active={active}
      />
      <Skill
        src="/osrs-icons/Slayer_icon.webp"
        alt="slayer icon"
        level={skills.slayer.level}
        active={active}
      />
      <Skill
        src="/osrs-icons/Farming_icon.webp"
        alt="farming icon"
        level={skills.farming.level}
        active={active}
      />
      <Skill
        src="/osrs-icons/Runecraft_icon.webp"
        alt="runecrafting icon"
        level={skills.runecraft.level}
        active={active}
      />
      <Skill
        src="/osrs-icons/Hunter_icon.webp"
        alt="hunter icon"
        level={skills.hunter.level}
        active={active}
      />
      <Skill
        src="/osrs-icons/Construction_icon.webp"
        alt="construction icon"
        level={skills.construction.level}
        active={active}
      />
      <Skill
        key={"overall"}
        src="/osrs-icons/overall.webp"
        alt="overall skill icon"
        level={skills.overall.level}
        active={active}
      />
    </>
  );
}

const skillAnimations = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
  },
};

function Skill({
  src,
  alt,
  level,
  active,
}: {
  src: string;
  alt: string;
  level: number;
  active: boolean;
}) {
  return (
    <motion.div
      variants={skillAnimations}
      initial={"initial"}
      animate={"enter"}
      exit={"initial"}
      className={`flex gap-3 items-center `}
    >
      <div>
        <Image src={src} width={20} height={20} alt={alt} className="block" />
      </div>
      <span>{level ? level : "Not tracked"}</span>
    </motion.div>
  );
}
