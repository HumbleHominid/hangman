'use client';

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
				setBgColor('bg-blue-500');
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
	}, [keyState]);

	return (
		<div
			className={`relative flex flex-col transition-all w-12 h-12 md:w-16 md:h-16 items-center border-x-2 border-t border-b-4 md:border-x-4 md:border-t-2 md:border-b-8 md:hover:-translate-y-1 rounded-md border-slate-900 dark:border-white ${bgColor} md:hover:cursor-pointer active:translate-y-1`}
			onClick={() => clickCallback(character)}
		>
				<span className="uppercase text-3xl m-auto text-center select-none">
					{character}
				</span>
				<div className="absolute bottom-0.5 md:bottom-1 w-9/12 h-0.5 bg-slate-900 dark:bg-white rounded-sm" />
		</div>
	)
}