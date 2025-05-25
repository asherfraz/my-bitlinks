"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Shorten() {
	const [links, setLinks] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchLinks = async () => {
			try {
				const response = await fetch("/api/generate/getAll");
				if (!response.ok) {
					throw new Error("Failed to fetch links");
				}
				const data = await response.json();
				if (data.success) {
					setLinks(data.data);
					// console.log("Fetched links:", data.data);
				} else {
					console.error(data.message);
				}
			} catch (error) {
				console.error("Error fetching links:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchLinks();
	}, []);

	if (loading) {
		return (
			<section id="shorten">
				<div className="flex flex-col items-center justify-center min-h-[82vh] text-white pt-8">
					<h2 className="text-5xl font-bold mb-4 underline underline-offset-6 decoration-4 decoration-blue-500 ">
						Loading links...
					</h2>
				</div>
			</section>
		);
	}

	return (
		<section id="shorten">
			<div className="flex flex-col items-center justify-start min-h-[82vh] text-white pt-8">
				<h2 className="text-5xl font-bold mb-4 underline underline-offset-6 decoration-4 decoration-blue-500 ">
					All Your Shortened Links!
				</h2>
				<div className="w-xl flex flex-col items-center justify-center my-4 p-8 rounded-md bg-gray-600 shadow-xl">
					{links && links.length > 0 ? (
						<ul className="list-decimal list-outside w-full">
							{links.map((link) => (
								<li
									key={link._id}
									className="mb-4 border-b border-gray-500 pb-2"
								>
									<div className="flex flex-col  mb-2">
										<div className="flex items-center justify-between">
											<span className="font-semibold text-lg">
												Name: {link.shorturl}:
											</span>
											<span className="ml-2 text-gray-300">
												{new Date(link.createdAt).toLocaleString()}
											</span>
										</div>
										<div className="flex flex-col items-center  ml-4 mb-2">
											<span>
												Shoten Link:{" "}
												<Link
													href={`${process.env.NEXT_PUBLIC_HOST}/${link.shorturl}`}
													className="text-blue-400 hover:underline"
													target="_blank"
													rel="noopener noreferrer"
												>
													{`${process.env.NEXT_PUBLIC_HOST}/${link.shorturl}`}
												</Link>
											</span>
											<span className="ml-2 text-gray-300">
												Original Link: ({link.longurl})
											</span>
										</div>
									</div>
								</li>
							))}
						</ul>
					) : (
						<p className="text-gray-400 text-2xl font-bold shadow-lg">
							No links found!
						</p>
					)}
				</div>
			</div>
		</section>
	);
}
