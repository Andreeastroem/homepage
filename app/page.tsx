import NextLink from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-green-400">
      <h1 className="w-full bg-blue-500 p-3 text-white">Hello</h1>
      <nav className="grid grid-cols-2 w-full grid-rows-3 py-6 px-4 gap-3">
        <Link href="/showcase" text="Showcase" position="LEFT" index={1} />
        <Link href="/projects" text="Projects" position="RIGHT" index={2} />
        <Link href="/blog" text="Blog" position="LEFT" index={3} />
      </nav>
    </main>
  );
}

function Link({
  href,
  text,
  position,
  index,
}: {
  href: string;
  text: string;
  position: "LEFT" | "RIGHT";
  index: number;
}) {
  return (
    <NextLink
      style={{
        gridRowStart: index,
        gridColumnStart: position === "LEFT" ? 1 : 2,
      }}
      href={href}
      className="relative max-w-60"
    >
      <div className="bg-yellow-800 p-4 rounded-tr-2xl rounded-bl-2xl relative text-white text-center z-20">
        {text}
      </div>
      <SignPole index={index} />
    </NextLink>
  );
}

function SignPole({ index }: { index: number }) {
  const rotationDir = index % 2 === 0 ? 1 : -1;
  const rotation = Math.round((rotationDir * 3) / index);

  return (
    <div
      style={{
        rotate: `${rotation}deg`,
      }}
      className="w-2 h-20 bg-yellow-700 absolute left-1/2 top-3/4 z-10"
    ></div>
  );
}
