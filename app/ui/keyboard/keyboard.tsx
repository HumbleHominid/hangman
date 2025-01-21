import Key, { KeyState } from "@/app/ui/keyboard/key";

export default function Keyboard({
	keyClicked,
	word,
	guessedLetters,
}:{
	keyClicked: (char:string) => void;
	word: string;
	guessedLetters: string;
}) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
	return (
		<div className="flex flex-wrap justify-center items-center gap-2">
			{alphabet.map((letter) => {
				return (
					<Key
						key={letter}
						character={letter}
						clickCallback={keyClicked}
						keyState={
							guessedLetters.includes(letter) ?
								(word.includes(letter) ?
									KeyState.Correct :
									KeyState.Incorrect
								) :
							KeyState.NotGuessed
						}
					/>
				)
			})}
		</div>
	)
}