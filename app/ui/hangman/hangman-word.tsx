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
	const nonBorderCharacters = " -";
	return (
		<div className="flex flex-wrap justify-center gap-2 min-h-min">
			{word.split('').map((char, index) => {
				return (
					<div
						key={`${index}-${char}`}
						className={clsx(
							"flex h-8 sm:h-10 lg:h-16 w-8 sm:w-10 lg:w-16",
							{
								"border-b-2 border-b-slate-900 dark:border-b-white": !nonBorderCharacters.includes(char)
							}
						)}
					>
						<span
							className={clsx(
								"uppercase text-xl sm:text-3xl lg:text-5xl font-medium m-auto text-center select-none",
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