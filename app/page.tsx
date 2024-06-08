import { Sea } from "@/components/Sea";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-green-400">
      <Sea />
      <Navbar />
    </main>
  );
}
