import { WotdData } from "@/app/ui/hangman/hangman";

export default function WordOfTheDay({
	data,
} : {
	data: WotdData
}) {
	return (
		<div className="flex flex-col gap-8">
			<div className="flex justify-center items-center gap-6">
				<span className="font-extralight text-6xl margin-auto">{data.word}</span>
				<span className="text-2xl">•</span>
				<span className="text-4xl font-thin">{data.pronunciation}</span>
				<span className="text-2xl">•</span>
				<span className="leading-snug text-2xl font-light dark:text-slate-100 text-slate-600">{data.wordClass}</span>
			</div>
			<p className="text-2xl">{data.definition}</p>
			<div className="flex flex-col gap-2">
				{data.examples?.map((example,index) => {
					return (
						<p
						key={index}
						className="text-xl font-light"
						>
							{example}
						</p>
					)
				})}
			</div>
		</div>
	)
}