import Image from "next/image"
import { useState, useEffect, useMemo } from "react";

export default function HangmanImage(
{
	missedGuesses,
} : {
	missedGuesses: number;
}) {
	const hangmanImages = useMemo(
		() => [
			'/hangman/initial.png',
			'/hangman/one_miss.png',
			'/hangman/two_miss.png',
			'/hangman/three_miss.png',
			'/hangman/four_miss.png',
			'/hangman/five_miss.png',
			'/hangman/six_miss.png',
		], []
	);
	const [hangmanImage, setHangmanImage] = useState(hangmanImages[0])

	useEffect(() => {
		setHangmanImage(hangmanImages[Math.min(Math.max(missedGuesses, 0), hangmanImages.length - 1)]);
	}, [missedGuesses, hangmanImages]);

	return (
		<Image
			width={696}
			height={950}
			src={hangmanImage}
			alt="Hangman Image"
			className="filter invert dark:invert-0"
		/>
	)
}