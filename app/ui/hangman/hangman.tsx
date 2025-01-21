'use client';

import { useEffect, useRef, useState } from "react"
import HangmanImage from "@/app/ui/hangman/hangman-image";

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
		<div className="grid grid-rows-2">
			{/* Place the hangman image on top */}
			<HangmanImage
				missedGuesses={missedGuesses}
			/>
			{/* Place the keyboard on bottom */}
		</div>
	)
}