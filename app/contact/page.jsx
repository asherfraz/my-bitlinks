import React from "react";

export default function Contact() {
	return (
		<section id="shorten">
			<div className="flex flex-col items-center justify-center min-h-[82vh] text-white">
				<h2 className="text-5xl text-center leading-15 font-bold mb-4 underline underline-offset-6 decoration-4 decoration-blue-500 ">
					Want to get in touch?
					<br />
					<span>Feel free to reach out!</span>
					<br />
					<span className="">
						You can find me on{" "}
						<a
							href="https://github.com/asherfraz/my-bitlinks"
							className="text-blue-500 hover:text-black/60"
							target="_blank"
							rel="noopener noreferrer"
						>
							Github
						</a>{" "}
						or{" "}
						<a
							href="https://pk.linkedin.com/in/asherfraz"
							className="text-blue-500 hover:text-black/60"
							target="_blank"
							rel="noopener noreferrer"
						>
							Linkedin
						</a>
					</span>
				</h2>
			</div>
		</section>
	);
}
