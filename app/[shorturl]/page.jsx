import clientPromise from "@/lib/mongodb";
import { redirect } from "next/navigation";
import React from "react";

export default async function Page({ params }) {
	const shorturl = (await params).shorturl;

	const client = await clientPromise;
	const db = client.db("my-bitlinks");
	const collection = db.collection("links");

	// Find the long URL associated with the short URL
	const findLink = await collection.findOne({ shorturl: shorturl });

	console.log(" findLink: ", findLink);

	if (!findLink) {
		return (
			<div className="flex flex-col items-center justify-center text-2xl font-bold">
				<p>Short URL not found.</p>
				<p>Please check the URL and try again.</p>
				{/* {redirect("/")} */}
			</div>
		);
	}

	return (
		<div className="flex flex-col items-center justify-center text-2xl font-bold">
			Redirecting to {shorturl}...
			<div className="mt-4">
				<Link
					href={`https://${shorturl}`}
					className="text-blue-500 hover:underline"
				>
					Click here if not redirected automatically
				</Link>
			</div>
			{redirect(`${findLink.longurl}`)}
		</div>
	);
}
