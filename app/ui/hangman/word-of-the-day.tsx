import { WotdData } from "@/app/ui/hangman/hangman";

export default function WordOfTheDay({
	data,
} : {
	data: WotdData
}) {
	return (
		<div>
			<p>{data.word} • {data.pronunciation} • {data.wordClass}</p>
			<p>{data.definition}</p>
			{data.examples?.map((example,index) => {
				return (
					<p
						key={index}
					>
						{example}
					</p>
				)
			})}
		</div>
	)
}