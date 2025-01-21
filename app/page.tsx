import Hangman from "@/app/ui/hangman/hangman";

export default function Home() {
  return (
    <main>
      <div className="text-6xl font-bold">
        Hangman!
        <Hangman/>
      </div>
    </main>
  );
}
