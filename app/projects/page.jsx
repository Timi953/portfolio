"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import Image from "next/image";

// images
import SmartShelf1 from "@/public/image/projects/web/smartshelf/smartshelf-1.webp";
import SmartShelf2 from "@/public/image/projects/web/smartshelf/smartshelf-2.webp";
import SmartShelf3 from "@/public/image/projects/web/smartshelf/smartshelf-3.webp";
import ProjectAll from "@/public/image/projects.webp";

import Hr from "@/components/Hr";
import ProjectCard from "./components/ProjectCard";
import Projects from "@/json/data.json";
import FixedButon from "@/components/FixedButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const category = {
	1: "Web Development",
	2: "AI & Machine Learning",
	9: "Other",
};

export default function Page() {
	const [activeCategory, setActiveCategory] = useState(1);
	const projects = Projects.Projects.filter((item) => item.show === true);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<main className="overflow-hidden">
				<FixedButon href="/#projects">
					<FontAwesomeIcon icon={faChevronLeft} className="text-black dark:text-white pr-10" />
				</FixedButon>
				<div className="h-screen w-screen grid grid-cols-1 md:grid-cols-2 gap-8 px-10 md:px-20 items-center mb-10">
					<div className="flex flex-col justify-center items-start text-start order-2 md:order-1">
						<h1 className="text-black dark:text-white text-5xl md:text-8xl font-bold">
							My Projects
						</h1>
						<Hr />
						<p className="title text-xl mt-4 tracking-wider text-gray-700 dark:text-gray-300 leading-[1.7rem] mb-5">
							List of my projects that I have done and currently working on.
						</p>
						<motion.div
							initial={{ opacity: 0, y: 100 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, ease: "circOut" }}
							onClick={() => {
								window.scrollTo({
									top: 1000,
									behavior: "smooth",
								});
							}}
							className="mb-3">
							<Button variation="primary">Scroll Down</Button>
						</motion.div>
					</div>
					<div className="flex justify-center items-center order-1 md:order-2">
						<motion.div
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							transition={{ duration: 0.8, ease: "circOut" }}
							className="bg-slate-300 rounded-2xl h-[400px] md:h-[500px] w-full max-w-[400px] grayscale hover:grayscale-0 overflow-hidden relative">
							<Image
								src={ProjectAll}
								alt="Projects"
								fill
								sizes="(max-width: 768px) 100vw, 50vw"
								placeholder="blur"
								className="rounded-2xl object-cover"
							/>
						</motion.div>
					</div>
				</div>
				<div className="mt-10 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
					<div className="flex justify-center items-center flex-col my-5 self-start ">
						<Hr variant="long"></Hr>
						<h1 className="text-3xl font-bold mt-3 dark:text-white">Hightlight</h1>
					</div>
				</div>
				<div className="relative w-screen mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
					<div className="flex justify-center items-start flex-col mb-5 ">
						<div className="images relative w-full  aspect-square">
							<div className="absolute top-28 left-10 h-[40%]  aspect-video grayscale hover:grayscale-0 transition-[filter] ease duration-300 hover:scale-150 z-10">
								<motion.div
									initial={{ opacity: 0, scale: 0.5, x: 100 }}
									whileInView={{
										opacity: 1,
										scale: 1,
										x: 0,
									}}
									className="w-full h-full shadow-lg">
									<Image
										src={SmartShelf1}
										alt="SmartShelf"
										fill
										sizes="(max-width: 768px) 100vw, 50vw"
										placeholder="blur"
										className="rat object-cover"
									/>
								</motion.div>
							</div>
							<div className="absolute top-10 right-28 h-[30%]  aspect-video grayscale hover:grayscale-0 transition-[filter] ease duration-300 hover:scale-150">
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
									className="w-full h-full shadow-lg ">
									<Image
										src={SmartShelf2}
										alt="SmartShelf"
										fill
										sizes="(max-width: 768px) 100vw, 50vw"
										placeholder="blur"
										style={{ objectPosition: '0% 0%' }}
										className="object-cover"
									/>
								</motion.div>
							</div>
							<div className="absolute bottom-10 md:bottom-26 right-20 h-[35%]  aspect-video grayscale hover:grayscale-0 transition-[filter] ease duration-300 hover:scale-150">
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
									className="w-full h-full shadow-lg">
									<Image
										src={SmartShelf3}
										alt="SmartShelf"
										fill
										sizes="(max-width: 768px) 100vw, 50vw"
										placeholder="blur"
										className="object-cover"
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
							SmartShelf
						</h2>
						<p className="text-gray-600 dark:text-gray-400 text-justify title text-lg">
							SmartShelf is an AI-powered e-commerce platform designed to
							revolutionize online retail. Featuring intelligent inventory
							management, an AI shopping assistant that helps customers find
							exactly what they need, and automated order and payment
							processing, SmartShelf streamlines the entire shopping
							experience. Built with modern web technologies, it delivers
							seamless interactions for both merchants and customers.
						</p>{" "}
						<div className="mt-3">
							<Button variation="primary">
								<a
									href="https://smartshelf.cloud"
									target="_blank"
									rel="noopener noreferrer">
									Preview
								</a>
							</Button>
						</div>
					</motion.div>
				</div>
				<div className="mt-16 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
					<div className="flex justify-center items-center flex-col my-5 self-start">
						<Hr variant="long"></Hr>
						<motion.h1
							className="text-3xl font-bold mt-3 dark:text-white"
							initial={{
								opacity: 0,
								x: -200,
							}}
							whileInView={{
								opacity: 1,
								x: 0,
							}}
							transition={{
								delay: 0.7,
								type: "spring",
							}}>
							Other Note Worthy Projects
						</motion.h1>
					</div>
				</div>

				{/* choose category */}
				<motion.div
					initial={{
						opacity: 0,
						x: 200,
					}}
					whileInView={{
						opacity: 1,
						x: 0,
					}}
					transition={{
						type: "spring",
					}}
					className="flex flex-row justify-center items-start flex-wrap gap-3 md:gap-5 my-5 ">
					{Object.keys(category).map((key, index) => (
						<button
							key={index}
							className={`px-2 md:px-4 py-2 rounded-lg cursor-pointer transition-all ease duration-300 focus:bg-gray-300 focus:text-black focus:ring focus:ring-slate-500 ${
								activeCategory === key
									? "bg-gray-300 text-black hover:bg-gray-700 hover:text-white"
									: "bg-gray-700 text-white hover:bg-gray-300 hover:text-black"
							}`}
							onClick={() => setActiveCategory(key)}>
							{category[key]}
						</button>
					))}
				</motion.div>

				{/* projects */}
				<div className="w-screen mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10 cursor-pointer">
					{projects.map((project, index) => (
						<ProjectCard
							project={project}
							key={index}
							activeCategory={activeCategory}
						/>
					))}
				</div>

				{/* view in archive btn */}
				<motion.div
					initial={{
						opacity: 0,
					}}
					whileInView={{
						opacity: 1,
					}}
					className="flex justify-center items-center flex-col my-5 self-start ">
					<Button variation="primary">
						<Link href="projects/archive">View In Archive</Link>
					</Button>
				</motion.div>
			</main>
		</>
	);
}
