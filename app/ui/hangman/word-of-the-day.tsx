import { WotdData } from "@/app/ui/hangman/hangman";

export default function WordOfTheDay({ data }: { data: WotdData }) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
        <span className="margin-auto text-2xl font-light md:text-6xl md:font-extralight">
          {data.word}
        </span>
        <span className="hidden sm:inline md:text-2xl">•</span>
        <span className="text-center text-xl font-extralight md:text-4xl md:font-thin">
          {data.pronunciation}
        </span>
        <span className="hidden sm:inline md:text-2xl">•</span>
        <span className="font-normal leading-snug text-slate-600 md:text-2xl md:font-light dark:text-slate-100">
          {data.wordClass}
        </span>
      </div>
      <p className="md:text-2xl">{data.definition}</p>
      <div className="flex flex-col gap-2">
        {data.examples?.map((example, index) => {
          return (
            <p key={index} className="font-light md:text-xl">
              {example}
            </p>
          );
        })}
      </div>
    </div>
  );
}
