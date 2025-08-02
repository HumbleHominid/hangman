import clsx from "clsx";

export default function HangmanWord({
  word,
  guessedLetters = "",
  isGameOver,
}: {
  word: string;
  guessedLetters?: string;
  isGameOver: boolean;
}) {
  const nonBorderCharacters = " -";
  return (
    <div className="flex min-h-min flex-wrap justify-center gap-2">
      {word.split("").map((char, index) => {
        return (
          <div
            key={`${index}-${char}`}
            className={clsx("flex h-8 w-8 sm:h-10 sm:w-10 lg:h-16 lg:w-16", {
              "border-b-2 border-b-slate-900 dark:border-b-white":
                !nonBorderCharacters.includes(char),
            })}
          >
            <span
              className={clsx(
                "m-auto select-none text-center text-xl font-medium uppercase sm:text-3xl lg:text-5xl",
                {
                  hidden: !isGameOver && !guessedLetters.includes(char),
                  "text-red-800": isGameOver && !guessedLetters.includes(char),
                },
              )}
            >
              {char}
            </span>
          </div>
        );
      })}
    </div>
  );
}
