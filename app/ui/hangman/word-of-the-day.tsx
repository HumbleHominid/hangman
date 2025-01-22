import { WotdData } from "@/app/ui/hangman/hangman";

export default function WordOfTheDay({
	data,
} : {
	data: WotdData
}) {
	return (
		<div className="flex flex-col gap-8">
			<div className="flex flex-col sm:flex-row justify-center items-center gap-6">
				<span className="font-light md:font-extralight text-2xl md:text-6xl margin-auto">{data.word}</span>
				<span className="md:text-2xl hidden sm:inline">•</span>
				<span className="text-xl md:text-4xl font-extralight md:font-thin text-center">{data.pronunciation}</span>
				<span className="md:text-2xl hidden sm:inline">•</span>
				<span className="leading-snug md:text-2xl font-normal md:font-light dark:text-slate-100 text-slate-600">{data.wordClass}</span>
			</div>
			<p className="md:text-2xl">{data.definition}</p>
			<div className="flex flex-col gap-2">
				{data.examples?.map((example,index) => {
					return (
						<p
						key={index}
						className="md:text-xl font-light"
						>
							{example}
						</p>
					)
				})}
			</div>
		</div>
	)
}