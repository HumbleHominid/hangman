'use client';

import Image from 'next/image';
import { Email, GitHub, Resume } from '@/app/lib/ref-links';
import { DocumentIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import FooterLink from '@/app/ui/footer/footer-link';
import { useEffect, useMemo, useState } from 'react';
import { usePrefersDarkMode } from '@/app/lib/hooks/user-prefers-dark';

export default function Footer() {
	const footerLinkClass = "flex items-center gap-2 hover:underline hover:underline-offset-4";
	const prefersDarkMode = usePrefersDarkMode();
	const gitIcons = useMemo(
		() => [
			'/icons/github-mark-dark.svg',
			'/icons/github-mark-white.svg'
		],[]
	);
	// Assume we like dark mode
	const [gitIconSrc, setGitIconSrc] = useState(gitIcons[0]);

	useEffect(() => {
		setGitIconSrc(gitIcons[prefersDarkMode ? 1: 0]);
	}, [prefersDarkMode, gitIcons]);

	return (
		<footer className="flex flex-col sm:flex-row gap-6 flex-wrap items-center justify-center px-8">
			{/* GitHub */}
		  <FooterLink
				href={GitHub}
				className={footerLinkClass}
			>
				{/* Light-mode Icon */}
				<Image
					aria-hidden
					src={gitIconSrc}
					alt="GitHub icon"
					width={16}
					height={16}
					className="inline"
				/>
				<span>GitHub</span>
			</FooterLink>
			{/* Resume */}
		  <FooterLink
				href={Resume}
				className={footerLinkClass}
		  >
				<DocumentIcon className="w-5"/>
				<span>Resume</span>
		  </FooterLink>
			{/* Email */}
			<div
				className={`${footerLinkClass} hover:cursor-pointer`}
			>
				<EnvelopeIcon className="w-5"/>
				<span className="select-all">{Email}</span>
			</div>
		</footer>
	);
}
