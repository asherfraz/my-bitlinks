"use client";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
	const [longurl, setLongurl] = useState("");
	const [shorturl, setShorturl] = useState("");
	const [generated, setGenerated] = useState("");

	const handleGenerate = () => {
		if (!longurl) {
			alert("Please enter a valid URL to shorten.");
			return;
		}
		if (!shorturl) {
			alert("Please enter a name for the shortened URL.");
			return;
		}

		const myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		const raw = JSON.stringify({
			longurl: longurl,
			shorturl: shorturl,
		});

		const requestOptions = {
			method: "POST",
			headers: myHeaders,
			body: raw,
			redirect: "follow",
		};

		fetch("/api/generate", requestOptions)
			.then((response) => response.json())
			.then((result) => {
				setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
				setLongurl("");
				setShorturl("");
				alert(result.message);
			})
			.catch((error) => console.error(error));

		console.log("shorturl: " + shorturl);
		console.log("Generating shortened URL:" + generated);
	};

	return (
		<section id="shorten">
			<div className="flex flex-col items-center justify-center min-h-[82vh] text-white">
				<h2 className="text-5xl font-bold mb-4 underline underline-offset-6 decoration-4 decoration-blue-500 ">
					Shorten Your Links, Amplify Your Reach
				</h2>
				<div className="w-lg  flex flex-col items-center justify-center my-4 p-8 rounded-md bg-gray-600 shadow-lg">
					<h3 className="text-2xl font-semibold font-[monospace]">
						Paste the URL to be shortened
					</h3>
					{/* <form
						onSubmit={() => {
							handleGenerate();
							setLongurl("");
							setShorturl("");
						}}
						className="flex flex-col w-full max-w-lg"
					> */}

					<div className="w-full max-w-lg flex flex-col gap-2 items-center justify-center mt-4">
						<input
							type="url"
							placeholder="Enter your URL here"
							value={longurl}
							onChange={(e) => setLongurl(e.target.value)}
							className="p-2 rounded-md bg-gray-700 text-white w-full mr-2"
							required
						/>
						<input
							type="text"
							placeholder="Enter your URL name here"
							value={shorturl}
							onChange={(e) => setShorturl(e.target.value)}
							className="p-2 rounded-md bg-gray-700 text-white w-full mr-2"
							required
						/>
						<button
							onClick={handleGenerate}
							className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white font-semibold"
						>
							Shorten
						</button>
					</div>
					{/* </form> */}
					<p className="mt-1 text-sm text-gray-400">
						Enter a valid URL to shorten it. For example:{" "}
						<span className="text-blue-300">https://asherfraz.com/</span>
					</p>
					{generated && (
						<div className="mt-4 w-full">
							<p className="text-lg font-semibold mb-2">Shortened URL:</p>
							<div className="flex items-center bg-gray-700 p-2 rounded-md">
								{/* <input
									type="text"
									value={generated}
									readOnly
									className="flex-1 bg-transparent text-white outline-none"
								/> */}
								<Link
									href={generated}
									target="_blank"
									className="flex-1 bg-transparent text-white outline-none"
								>
									{generated}
								</Link>
								<button
									onClick={() => {
										navigator.clipboard.writeText(generated);
									}}
									className="ml-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white font-semibold"
								>
									Copy
								</button>
							</div>
						</div>
					)}
				</div>
				{/* main div end */}
			</div>
		</section>
	);
}
