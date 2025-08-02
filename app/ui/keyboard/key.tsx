"use client";

import { useEffect, useState } from "react";

export enum KeyState {
  NotGuessed,
  Correct,
  Incorrect,
}

export default function Key({
  character,
  clickCallback,
  keyState = KeyState.NotGuessed,
}: {
  character: string;
  clickCallback: (character: string) => void;
  keyState?: KeyState;
}) {
  const [bgColor, setBgColor] = useState("");

  useEffect(() => {
    switch (keyState) {
      case KeyState.Correct:
        setBgColor("bg-blue-500");
        break;
      case KeyState.Incorrect:
        setBgColor("bg-red-800");
        break;
      // Fallthrough intended
      case KeyState.NotGuessed:
      default:
        setBgColor("");
        break;
    }
  }, [keyState]);

  return (
    <div
      className={`relative flex h-12 w-12 flex-col items-center rounded-md border-x-2 border-b-4 border-t border-slate-900 transition-all md:h-16 md:w-16 md:border-x-4 md:border-b-8 md:border-t-2 md:hover:-translate-y-1 dark:border-white ${bgColor} active:translate-y-1 md:hover:cursor-pointer`}
      onClick={() => clickCallback(character)}
    >
      <span className="m-auto select-none text-center text-3xl uppercase">
        {character}
      </span>
      <div className="absolute bottom-0.5 h-0.5 w-9/12 rounded-sm bg-slate-900 md:bottom-1 dark:bg-white" />
    </div>
  );
}
