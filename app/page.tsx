import Hangman from "@/app/ui/hangman/hangman";

export default function Home() {
  return (
    <main>
      <h1 className='text-6xl font-bold'>
      Daily Hangman!
      </h1>
      <Hangman/>
    </main>
  );
}
