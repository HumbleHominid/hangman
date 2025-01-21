'use client';

import { useEffect, useRef, useState } from "react"
import HangmanImage from "@/app/ui/hangman/hangman-image";
import Keyboard from "@/app/ui/keyboard/keyboard";

export default function Hangman() {
	const [missedGuesses, setMissedGuesses] = useState(0);
	const timerRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		if (timerRef.current !== null) clearInterval(timerRef.current);
		timerRef.current = setInterval(() => {
			setMissedGuesses((missedGuesses+1)%7)
		}, 2*1000);

		return (() => {
			if (timerRef.current !== null) clearInterval(timerRef.current);
		})
	});

	return (
		<div className="flex">
			{/* Place the hangman image on top */}
			<div className="w-4/12">
				<HangmanImage
					missedGuesses={missedGuesses}
				/>
			</div>
			<div className="w-8/12 flex flex-col m-auto">
				{/* The word and guesses goes here */}
				{/* Keyboard below the guesses */}
				<Keyboard/>
			</div>
		</div>
	)
}