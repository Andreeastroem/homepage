import Link from "next/link";

export function Sea() {
  return (
    <h1 className="w-full bg-blue-500 p-3 text-white">
      <Link href="/" className="w-full">
        Hello
      </Link>
    </h1>
  );
}
