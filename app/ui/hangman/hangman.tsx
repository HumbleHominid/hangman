'use client';

import { useEffect, useState } from "react";
import HangmanImage from "@/app/ui/hangman/hangman-image";
import Keyboard from "@/app/ui/keyboard/keyboard";
import HangmanWord from "@/app/ui/hangman/hangman-word";
import Parser from "rss-parser";

export default function Hangman() {
	const [missedGuesses, setMissedGuesses] = useState(0);
	const [word, setWord] = useState('');
	const [guessedLetters, setGuessedLetters] = useState('');
	const [isGameOver, setIsGameOver] = useState(false);
	const maxMisses = 6;

	const handleKeyClicked = (char: string) => {
		if (isGameOver) return;
		if (guessedLetters.includes(char)) return;
		const newGuessedLetters = guessedLetters.concat(char);
		setGuessedLetters(newGuessedLetters);
		if (!word.includes(char)) {
			let newMissedGuess = missedGuesses+1;
			setMissedGuesses(newMissedGuess);
			if (newMissedGuess === maxMisses) setIsGameOver(true);
		}
		else {
			const isCharGuessed = (char:string) => newGuessedLetters.includes(char);
			setIsGameOver(word.split('').every(isCharGuessed));
		}
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
					isGameOver={isGameOver}
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