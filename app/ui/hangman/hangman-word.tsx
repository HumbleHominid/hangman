import clsx from "clsx";

export default function HangmanWord({
	word,
	guessedLetters = '',
}:{
	word: string
	guessedLetters?: string
}) {
	return (
		<div className="flex gap-2">
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
									'hidden': !guessedLetters.includes(char)
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