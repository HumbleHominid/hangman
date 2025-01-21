import clsx from "clsx";
import Image from "next/image"

export default function HangmanImage(
{
	missedGuesses,
} : {
	missedGuesses: number;
}) {
	const hangmanImages = [
		'/hangman/head.png',
		'/hangman/body.png',
		'/hangman/left_leg.png',
		'/hangman/right_leg.png',
		'/hangman/left_arm.png',
		'/hangman/right_arm.png',
	];

	return (
		<div className="relative">
			<Image
				width={696}
				height={950}
				src="/hangman/stand.png"
				alt="Hangman Stand"
				className="absolute top-0 left-0 filter invert dark:invert-0"
			/>
			{hangmanImages.map((src, index) => {
				return (
					<Image
						key={src}
						width={696}
						height={950}
						src={src}
						alt="Hangman Body Part"
						className={clsx(
							"absolute top-0 left-0 filter invert dark:invert-0",
							{
								"hidden": index >= missedGuesses
							}
						)}
					/>
				)
			})}
		</div>
	)
}