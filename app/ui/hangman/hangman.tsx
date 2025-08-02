"use client";

import { useEffect, useState } from "react";
import HangmanImage from "@/app/ui/hangman/hangman-image";
import Keyboard from "@/app/ui/keyboard/keyboard";
import HangmanWord from "@/app/ui/hangman/hangman-word";
import Parser from "rss-parser";
import WordOfTheDay from "@/app/ui/hangman/word-of-the-day";
import clsx from "clsx";

export type WotdData = {
  word: string;
  pronunciation?: string;
  wordClass?: string;
  definition?: string;
  examples?: Array<string>;
};

export default function Hangman() {
  const [missedGuesses, setMissedGuesses] = useState(0);
  const [guessedLetters, setGuessedLetters] = useState("");
  const [isGameOver, setIsGameOver] = useState(false);
  const [wotd, setWotd] = useState<WotdData>({ word: "" });
  const maxMisses = 6;

  const handleKeyClicked = (char: string) => {
    if (wotd === undefined) return;
    if (isGameOver) return;
    if (guessedLetters.includes(char)) return;
    const newGuessedLetters = guessedLetters.concat(char);
    setGuessedLetters(newGuessedLetters);
    if (!wotd.word.includes(char)) {
      const newMissedGuess = missedGuesses + 1;
      setMissedGuesses(newMissedGuess);
      if (newMissedGuess === maxMisses) setIsGameOver(true);
    } else {
      const isCharGuessed = (char: string) => newGuessedLetters.includes(char);
      setIsGameOver(wotd.word.split("").every(isCharGuessed));
    }
  };

  useEffect(() => {
    const corsProxy = "https://corsproxy.io/?url=";
    const rss = corsProxy + "https://www.merriam-webster.com/wotd/feed/rss2";
    type customFeed = { feed: string };
    const parser: Parser<customFeed> = new Parser({
      customFields: {
        feed: ["feed"],
      },
    });

    (async () => {
      const feed = await parser.parseURL(rss);
      if (!("items" in feed) || feed.items.length === 0) return;
      const data = feed.items[0];
      if (typeof data.contentSnippet !== "string") return;
      const splitContent = data.contentSnippet.split("\n").slice(1);
      const start = splitContent.findIndex((str) => str.trim() !== "");
      const end = splitContent.findIndex((str) => str === "See the entry >");
      const slicedArr = splitContent.slice(start, end);
      const titleArr = slicedArr[0].split("•");
      const wotdData: WotdData = {
        word: titleArr[0].trim().toLowerCase(),
        pronunciation: titleArr[1].trim(),
        wordClass: titleArr[2].trim(),
        definition: slicedArr[1].trim(),
        examples: slicedArr.slice(2).map((str) => str.trim()),
      };
      setWotd(wotdData);
      // We only have the user play a-z but sometimes the WOTD contains things
      // like spaces or -. In cases where we find characters that are not a-z,
      // give them to the player as freebies
      const alphabet = "abcdefghijklmnopqrstuvwxyz";
      const seenChars = new Set<string>();
      let charsToAdd = "";
      for (const char of wotdData.word) {
        if (seenChars.has(char)) continue;
        if (!alphabet.includes(char)) charsToAdd += char;
        seenChars.add(char);
      }
      setGuessedLetters(charsToAdd);
    })();
  }, []);

  return (
    <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-4">
      {/* Place the hangman image on top */}
      <div className="w-4/12">
        <HangmanImage missedGuesses={missedGuesses} />
      </div>
      <div className="m-auto flex flex-1 flex-col items-center gap-8 lg:w-8/12">
        {/* TODO: Skeleton for async requests */}
        {/* The word and guesses goes here */}
        <div>
          <HangmanWord
            word={wotd.word}
            guessedLetters={guessedLetters}
            isGameOver={isGameOver}
          />
        </div>
        {/* Keyboard below the guesses */}
        <div
          className={clsx(
            "overflow-hidden transition-all duration-1000 ease-in-out",
            isGameOver ? "max-h-0 p-0" : "max-h-lvh p-4",
          )}
        >
          <Keyboard
            keyClicked={handleKeyClicked}
            word={wotd.word}
            guessedLetters={guessedLetters}
          />
        </div>
        {/* Wotd */}
        <div
          className={clsx(
            "overflow-hidden transition-all delay-1000 duration-1000",
            !isGameOver ? "max-h-0" : "max-h-2000",
          )}
        >
          <WordOfTheDay data={wotd} />
        </div>
      </div>
    </div>
  );
}
