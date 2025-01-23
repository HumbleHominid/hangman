import Hangman from "@/app/ui/hangman/hangman";
import { format } from 'date-fns';

export default function Home() {
  const date = format(new Date(), 'eeee do MMM u')
  return (
    <main className="overflow-hidden">
      <h1 className="mb-2 text-6xl font-light underline decoration-2 underline-offset-2">
      Daily Hangman
      </h1>
      <p className="mb-4 tracking-wide text-2xl">{date}</p>
      <Hangman/>
    </main>
  );
}
