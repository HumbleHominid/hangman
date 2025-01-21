import Key from "@/app/ui/keyboard/key";

export default function Keyboard() {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
	const clickCallback = (str:string) => {console.log(str);}
	return (
		<div className="flex flex-wrap justify-center items-center gap-2">
			{alphabet.map((letter) => {
				return (
					<Key
						key={letter}
						character={letter}
						clickCallback={clickCallback}
					/>
				)
			})}
		</div>
	)
}