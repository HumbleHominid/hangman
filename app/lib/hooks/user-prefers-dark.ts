'use client';

import { useEffect, useState } from "react";

export function userPrefersDarkMode() {
	const [prefersDark, setPrefersDark] = useState(true);

	useEffect(() => {
		const queryDark = () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
		setPrefersDark(queryDark());

		const handleChange = (event: MediaQueryListEvent) => setPrefersDark(event.matches);
		window.matchMedia(('(prefers-color-scheme: dark')).addEventListener('change', handleChange);

		return (() => {
			window.matchMedia(('(prefers-color-scheme: dark')).removeEventListener('change', handleChange);
		});
	}, [prefersDark]);

	return prefersDark;
}