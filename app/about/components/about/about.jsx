import Image from "next/image";
// import Card from "./spotify/card"; // Spotify integration removed
import { motion } from "framer-motion";
import Me1 from "@/public/image/timi-about-main.webp";
import Me2 from "@/public/image/timi-about-deskIT.webp";
import Me3 from "@/public/image/timi-about-plant.webp";
import Hr from "@/components/Hr";

function Title() {
	return (
		<div className="mt-10 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
			<div className="flex justify-center items-center flex-col my-5 self-start ">
				<Hr variant="long"></Hr>
				<h1 className="text-3xl font-bold mt-3 dark:text-white">Who Am I?</h1>
			</div>
		</div>
	);
}

export default function About() {
	return (
		<>
			<Title />
			<div className="relative mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
				<div className="flex justify-center items-start flex-col mb-5 ">
					<div className="images relative w-full  aspect-square">
						<div className="absolute top-28 left-10 w-[50%]  aspect-square grayscale hover:grayscale-0 transition-[filter] ease duration-300">
							<motion.div
								initial={{ opacity: 0, scale: 0.5, x: 100 }}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
								}}
								className="w-full h-full">
								<Image
									src={Me1}
									alt="Timi Olumcev"
									fill
									sizes="(max-width: 768px) 100vw, 33vw"
									className="object-cover"
									placeholder="blur"
								/>
							</motion.div>
						</div>
						<div className="absolute top-16 right-28 w-[30%]  aspect-square grayscale hover:grayscale-0 transition-[filter] ease duration-300">
							<motion.div
								initial={{
									opacity: 0,
									scale: 0.5,
									x: -100,
								}}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
								}}
								transition={{ delay: 0.3 }}
								className="w-full h-full">
								<Image
									src={Me2}
									alt="Timi Olumcev"
									fill
									sizes="(max-width: 768px) 100vw, 33vw"
									className="object-cover"
									placeholder="blur"
								/>
							</motion.div>
						</div>
						<div className="absolute bottom-16 right-20 w-[40%]  aspect-square grayscale hover:grayscale-0 transition-[filter] ease duration-300">
							<motion.div
								initial={{
									opacity: 0,
									scale: 0.5,
									x: -100,
								}}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
								}}
								transition={{
									delay: 0.5,
								}}
								className="w-full h-full">
								<Image
									src={Me3}
									alt="Timi Olumcev"
									fill
									sizes="(max-width: 768px) 100vw, 33vw"
									className="object-cover"
									placeholder="blur"
								/>
							</motion.div>
						</div>
					</div>
				</div>
				<motion.div
					className="flex justify-center items-start flex-col mb-5 md:px-10"
					initial={{
						opacity: 0,
						x: 200,
					}}
					whileInView={{
						opacity: 1,
						x: 0,
					}}
					transition={{
						delay: 0.5,

						type: "spring",
					}}>
					<h2 className="text-2xl font-bold tracking-wider mb-3 dark:text-white">
						Timi Olumcev
					</h2>
					<p className="text-gray-600 dark:text-gray-400 text-justify title text-lg">
						Hey there, I&rsquo;m Timi Olumcev, a
						<span className="text-black dark:text-white font-medium">
							{" "}
							Full Stack AI Developer
						</span>{" "}
						from
						<span className="text-black dark:text-white font-medium">
							{" "}
							Skopje, North Macedonia.
						</span>{" "}
						I started my career ensuring software works flawlessly — now I build systems that think for themselves.
						<br /><br />
						With a strong foundation in
						<span className="text-black dark:text-white font-medium">
							{" "}
							automation and software reliability,
						</span>{" "}
						I transitioned into the AI space and never looked back. Today, I design and build SaaS and PaaS solutions powered by AI, helping clients solve unique problems with speed, scalability, and intelligence.
						<br /><br />
						I bring a
						<span className="text-black dark:text-white font-medium">
							{" "}
							&quot;nothing is impossible to build&quot;
						</span>{" "}
						mindset to every project — whether it&rsquo;s integrating LLMs into existing workflows, automating decision-making systems with N8n and Claude Code, or creating cloud-native applications on GCP and Amazon Bedrock that just work smarter.
						<br /><br />
						My approach?
						<span className="text-black dark:text-white font-medium">
							{" "}
							Build fast, but build right.
						</span>{" "}
						Quality-first development rooted in reliability, fearless learning of new AI frameworks, and always focusing on value — reliability, security, and ROI at the core. I&rsquo;m passionate about where AI meets automation, and I&rsquo;m always looking for ways to push technology beyond what it&rsquo;s &quot;supposed&quot; to do.
					</p>
					{/* <Card /> */}
				</motion.div>
			</div>
		</>
	);
}
