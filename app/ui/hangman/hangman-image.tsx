import clsx from "clsx";
import Image from "next/image"
import { useState, useEffect } from "react";

export default function HangmanImage(
{
	missedGuesses,
} : {
	missedGuesses: number;
}) {
	const hangmanImages = [
		'/hangman/initial.png',
		'/hangman/one_miss.png',
		'/hangman/two_miss.png',
		'/hangman/three_miss.png',
		'/hangman/four_miss.png',
		'/hangman/five_miss.png',
		'/hangman/six_miss.png',
	];
	const [hangmanImage, setHangmanImage] = useState(hangmanImages[0])

	useEffect(() => {
		if (missedGuesses < 0) missedGuesses = 0;
		if (missedGuesses >= hangmanImages.length) missedGuesses = hangmanImages.length - 1;
		setHangmanImage(hangmanImages[missedGuesses]);
	}, [missedGuesses]);

	return (
		<div className="relative">
			<Image
				width={696}
				height={950}
				src={hangmanImage}
				alt="Hangman Image"
				className="absolute top-0 left-0 filter invert dark:invert-0"
			/>
		</div>
	)
}