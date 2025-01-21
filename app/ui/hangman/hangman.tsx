'use client';

import { useEffect, useState } from "react";
import HangmanImage from "@/app/ui/hangman/hangman-image";
import Keyboard from "@/app/ui/keyboard/keyboard";
import HangmanWord from "./hangman-word";
import Parser from "rss-parser";

export default function Hangman() {
	const [missedGuesses, setMissedGuesses] = useState(0);
	const [word, setWord] = useState('');
	const [guessedLetters, setGuessedLetters] = useState('');

	const handleKeyClicked = (char: string) => {
		if (guessedLetters.includes(char)) return;
		setGuessedLetters(guessedLetters.concat(char));
		if (!word.includes(char)) setMissedGuesses((missedGuesses+1)%7);
	}

	useEffect(() => {
		const CORS_PROXY = "https://corsproxy.io/?url=";
		const isDev = process.env.NODE_ENV === 'development';
		const rss = (isDev ? CORS_PROXY : '') + 'https://www.merriam-webster.com/wotd/feed/rss2';
		type customFeed = {feed: string};
		const parser: Parser<customFeed> = new Parser({
			customFields: {
				feed: ['feed']
			}
		});

		(async () => {
			const feed = await parser.parseURL(rss);
			if ('items' in feed && feed.items.length > 0) {
				if (typeof feed.items[0].title === "string") {
					setWord(feed.items[0].title);
				}
			}
		})();
	}, []);

	return (
		<div className="flex">
			{/* Place the hangman image on top */}
			<div className="w-4/12">
				<HangmanImage
					missedGuesses={missedGuesses}
				/>
			</div>
			<div className="w-8/12 flex flex-col m-auto items-center gap-8">
				{/* TODO: Skeleton for async requests */}
				{/* The word and guesses goes here */}
				<HangmanWord
					word={word}
					guessedLetters={guessedLetters}
				/>
				{/* Keyboard below the guesses */}
				<Keyboard
					keyClicked={handleKeyClicked}
					word={word}
					guessedLetters={guessedLetters}
				/>
			</div>
		</div>
	)
}