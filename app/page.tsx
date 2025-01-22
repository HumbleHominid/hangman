import Hangman from "@/app/ui/hangman/hangman";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <h1 className='text-6xl font-light mb-4 underline decoration-2 underline-offset-2'>
      Your Daily Hangman Fix
      </h1>
      <Hangman/>
    </main>
  );
}
