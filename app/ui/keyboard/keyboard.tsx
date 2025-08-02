"use client";

import Key, { KeyState } from "@/app/ui/keyboard/key";

export default function Keyboard({
  keyClickedAction: keyClicked,
  word,
  guessedLetters,
}: {
  keyClickedAction: (char: string) => void;
  word: string;
  guessedLetters: string;
}) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 py-2">
      {alphabet.map((letter) => {
        return (
          <Key
            key={letter}
            character={letter}
            clickAction={keyClicked}
            keyState={
              guessedLetters.includes(letter)
                ? word.includes(letter)
                  ? KeyState.Correct
                  : KeyState.Incorrect
                : KeyState.NotGuessed
            }
          />
        );
      })}
    </div>
  );
}
