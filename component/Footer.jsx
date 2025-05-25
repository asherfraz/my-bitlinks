import Link from "next/link";

export const Footer = () => {
	return (
		<footer className="text-gray-600 body-font border-t-2 border-gray-500 bg-zinc-900">
			<div className="container px-5 py-4 mx-auto flex items-center sm:flex-row flex-col">
				<Link
					href="/"
					className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
						/>
					</svg>
					<span className="ml-3 text-xl text-white">My-BitLinks</span>
				</Link>
				<p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
					&copy; 2025 My-BitLinks
				</p>
				<span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
					{/* Linkedin */}
					<Link
						href={"https://pk.linkedin.com/in/asherfraz"}
						target="_blank"
						className="ml-3 text-white/80 hover:text-gray-400"
					>
						<svg
							fill="currentColor"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="0"
							className="w-5 h-5"
							viewBox="0 0 24 24"
						>
							<path
								stroke="none"
								d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
							></path>
							<circle cx="4" cy="4" r="2" stroke="none"></circle>
						</svg>
					</Link>
				</span>
			</div>
		</footer>
	);
};
