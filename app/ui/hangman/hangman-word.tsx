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
		<div className="flex flex-wrap justify-center gap-2 min-h-min">
			{word.split('').map((char, index) => {
				return (
					<div
						key={`${index}-${char}`}
						className="flex h-8 sm:h-10 md:h-20 w-8 sm:w-10 md:w-20 border-b-2 border-b-slate-900 dark:border-b-white"
					>
						<span
							className={clsx(
								"uppercase text-xl sm:text-3xl md:text-7xl font-medium m-auto text-center select-none",
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