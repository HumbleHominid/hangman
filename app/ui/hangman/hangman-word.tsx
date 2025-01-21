import clsx from "clsx";

export default function HangmanWord({
	word,
	guessedLetters = '',
	isGameOver,
}:{
	word: string;
	guessedLetters?: string;
	isGameOver: boolean;
}) {
	return (
		<div className="flex gap-2 h-20">
			{word.split('').map((char, index) => {
				return (
					<div
						key={`${index}-${char}`}
						className="flex border-b-2 border-b-slate-900 dark:border-b-white w-16"
					>
						<span
							className={clsx(
								"uppercase text-7xl font-medium m-auto text-center select-none",
								{
									'hidden': !isGameOver && !guessedLetters.includes(char),
									'text-red-800' : isGameOver && !guessedLetters.includes(char)
								}
							)}
						>
							{char}
						</span>
					</div>
				)
			})}
		</div>
	)
}