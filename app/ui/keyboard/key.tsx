import { useEffect, useState } from "react";

export enum KeyState {
	NotGuessed,
	Correct,
	Incorrect
};

export default function Key({
	character,
	clickCallback,
	keyState = KeyState.NotGuessed,
} : {
	character: string;
	clickCallback: (character: string) => void;
	keyState?: KeyState;
}) {
	const [bgColor, setBgColor] = useState('');

	useEffect(() => {
		switch (keyState) {
			case KeyState.Correct:
				setBgColor('bg-blue-300');
				break;
			case KeyState.Incorrect:
				setBgColor('bg-red-800');
				break;
			// Fallthrough intended
			case KeyState.NotGuessed:
			default:
				setBgColor('');
				break;
		}
	}, [keyState])

	return (
		<div
			className={`relative flex flex-col w-16 h-16 items-center border-x-4 border-t-2 border-b-8 rounded-md border-slate-900 dark:border-white ${bgColor}`}
			onClick={() => clickCallback(character)}
		>
				<span className="uppercase text-3xl m-auto text-center hover:cursor-pointer select-none">
					{character}
				</span>
				<div className="absolute bottom-1 w-9/12 h-0.5 bg-slate-900 dark:bg-white rounded-sm" />
		</div>
	)
}