// Copyright (C) 2025 Alvalen Bilyunazra
// This file is part of Alvalens-porto-2-nextJs.
// Licensed under the GNU GPL v3.0. See LICENSE for details.

"use client";
import Image from "next/legacy/image";
import { motion } from "framer-motion";
import Link from "next/link";

// hooks and context
import { useFullpageScroll } from "@/hooks/useFullpageScroll";
import { FullpageProvider } from "@/context/FullpageContext";

// components
import Button from "@/components/Button";
import Sidebar from "@/components/Sidebar";
import Me from "@/public/image/me.jpg";
import MeAbout from "@/public/image/timi-about-main.jpg";
import Setup from "@/public/image/contact-desk.jpg";
import ProjectAll from "@/public/image/projects.png";
import Hr from "@/components/Hr";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const SECTIONS = ["home", "about", "projects", "contact"];

const MyPage = () => {
	const { activeSection, scrollToSection, containerRef } = useFullpageScroll(SECTIONS);

	return (
		<FullpageProvider value={{ activeSection, scrollToSection }}>
			<Sidebar />
			<div ref={containerRef} className="scroll-container">
				<section id="home" className="section">
					<div className="mx-auto container grid grid-cols-1 md:grid-cols-3 gap-4 p-10 overflow-hidden md:px-20">
						<motion.div
							className="col-span-2 flex flex-col justify-center items-center md:items-start text-center md:text-start"
							initial={{ x: -100, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{
								type: "spring",
							}}>
							<div className="block md:hidden col-span-1 mx-auto my-10">
								<div className="bg-slate-500 rounded-full h-60 w-60 grayscale hover:grayscale-0 transition-all ease duration-300">
									<Image
										src={Me}
										width={500}
										height={500}
										className="rounded-full w-full h-full object-cover "
										alt="Timi Olumcev"
										placeholder="blur"
									/>
								</div>
							</div>
							<motion.h3
								className="uppercase text-xl mb-3 font-normal text tracking-[.5rem] text-gray-500"
								initial={{ x: -100, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
								transition={{
									delay: 0.2,
									type: "spring",
								}}>
								Timi Olumcev
							</motion.h3>
							<motion.h1
								className="text-black dark:text-white text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold my-2 md:my-5"
								initial={{ x: -100, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
								transition={{
									delay: 0.3,
									type: "spring",
								}}>
								Full Stack AI Developer
							</motion.h1>
							<motion.p
								className="title text-md  2xl:text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem]"
								initial={{ x: -100, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
								transition={{
									delay: 0.4,
									type: "spring",
								}}>
								Hi! I&rsquo;m Timi, a Full Stack AI Developer specializing in
								AI-powered SaaS/PaaS solutions and intelligent automation.
								With a background in QA and test automation, I now focus on
								building scalable AI systems, LLM integrations, and agentic
								workflows that solve real-world problems.
							</motion.p>
							<motion.div
								className="buttons flex flex-row justify-center items-center space-x-4 mt-10"
								initial={{ x: -100, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
								transition={{
									delay: 0.5,
									type: "spring",
								}}>
								<Button variation="primary">
									<Link
										href={"/cv.pdf"}
										target="_blank"
										rel="noopener noreferrer"
										download>
										Download CV
									</Link>
								</Button>
								<Button variation="secondary">
									<a href="#contact">Contact Me</a>
								</Button>
							</motion.div>
						</motion.div>
						<motion.div
							className="hidden md:flex col-span-1 mx-auto justify-center items-center "
							initial={{ x: 100, opacity: 0 }}
							whileInView={{ x: 0, opacity: 1 }}
							transition={{
								delay: 0.7,
								type: "spring",
							}}>
							<div className="rounded-full h-auto w-auto  lg:px-12 grayscale hover:grayscale-0 transition-all ease duration-300">
								<Image
									src={Me}
									width={400}
									height={550}
									placeholder="blur"
									alt="Timi Olumcev"
									className="rounded-full w-full h-full object-cover"
								/>
							</div>
						</motion.div>
					</div>
				</section>
				<section id="about" className="section">
					<div className="w-screen min-h-screen grid grid-cols-1 md:grid-cols-2 gap-8 px-10 md:px-20 items-center">
						<div className="flex flex-col justify-center items-start text-start order-2 md:order-1">
							<motion.h1
								className="text-black dark:text-white text-5xl md:text-8xl font-bold"
								initial={{ x: -100, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
								transition={{
									delay: 0.1,
									type: "spring",
								}}>
								About Me
							</motion.h1>
							<Hr />
							<motion.p
								className="title text-xl mt-4 tracking-wider text-gray-500 dark:text-gray-400 leading-[1.7rem] mb-5"
								initial={{ x: -100, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
								transition={{
									delay: 0.2,
									type: "spring",
								}}>
								A brief introduction about me and my interest.
							</motion.p>
							<motion.div
								initial={{ y: 40, opacity: 0 }}
								whileInView={{ y: 0, opacity: 1 }}
								transition={{
									delay: 0.3,
									type: "spring",
								}}>
								<Button variation="primary">
									<Link href="/about">Learn More</Link>
								</Button>
							</motion.div>
						</div>
						<div className="flex justify-center items-center order-1 md:order-2">
							<motion.div
								className="bg-slate-300 rounded-2xl h-[400px] md:h-[500px] w-full max-w-[400px] grayscale hover:grayscale-0 overflow-hidden relative"
								initial={{
									x: 100,
									opacity: 0,
								}}
								whileInView={{
									x: 0,
									opacity: 1,
								}}
								transition={{
									delay: 0.3,
									type: "spring",
									stiffness: 100,
									damping: 20,
								}}>
								<Image
									src={MeAbout}
									layout="fill"
									className="object-cover rounded-2xl"
									alt="Timi Olumcev"
									placeholder="blur"
								/>
							</motion.div>
						</div>
					</div>
				</section>
				<section id="projects" className="section">
					<div className="w-screen min-h-screen grid grid-cols-1 md:grid-cols-2 gap-8 px-10 md:px-20 items-center">
						<div className="flex flex-col justify-center items-start text-start order-2 md:order-1">
							<motion.h1
								className="text-black dark:text-white text-5xl md:text-8xl font-bold"
								initial={{ x: -100, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
								transition={{
									delay: 0.1,
									type: "spring",
								}}>
								My Projects
							</motion.h1>
							<Hr />
							<motion.p
								className="title text-xl mt-4 tracking-wider text-gray-500 dark:text-gray-400 leading-[1.7rem] mb-5"
								initial={{ x: -100, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
								transition={{
									delay: 0.2,
									type: "spring",
								}}>
								This is some of my projects that I have done and currently working on.
							</motion.p>
							<motion.div
								initial={{ y: 40, opacity: 0 }}
								whileInView={{ y: 0, opacity: 1 }}
								transition={{
									delay: 0.3,
									type: "spring",
								}}>
								<Button variation="primary">
									<Link href="/projects">Learn More</Link>
								</Button>
							</motion.div>
						</div>
						<div className="flex justify-center items-center order-1 md:order-2">
							<motion.div
								className="bg-slate-300 rounded-2xl h-[400px] md:h-[500px] w-full max-w-[400px] grayscale hover:grayscale-0 overflow-hidden relative"
								initial={{
									x: 100,
									opacity: 0,
								}}
								whileInView={{
									x: 0,
									opacity: 1,
								}}
								transition={{
									delay: 0.3,
									type: "spring",
									stiffness: 100,
									damping: 20,
								}}>
								<Image
									src={ProjectAll}
									layout="fill"
									className="object-cover rounded-2xl"
									alt="Timi Olumcev Projects"
									placeholder="blur"
								/>
							</motion.div>
						</div>
					</div>
				</section>
				<section id="contact" className="section">
					<div className="w-screen min-h-screen grid grid-cols-1 md:grid-cols-2 gap-8 px-10 md:px-20 items-center">
						<div className="flex flex-col justify-center items-start text-start order-2 md:order-1">
							<motion.h1
								className="text-black dark:text-white text-5xl md:text-8xl font-bold mb-3"
								initial={{ x: -100, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
								transition={{
									delay: 0.1,
									type: "spring",
								}}>
								Get In Touch
							</motion.h1>
							<Hr />
							<motion.p
								className="title text-xl mt-4 tracking-wider text-gray-500 dark:text-gray-400 leading-[1.7rem] md:mb-5"
								initial={{ x: -100, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
								transition={{
									delay: 0.2,
									type: "spring",
								}}>
								Feel free to contact me if you have any questions or just want to say hi.
							</motion.p>
							<motion.p
								className="title text-xl mt-4 tracking-wider text-gray-500 dark:text-gray-400 leading-[1.7rem] mb-5"
								initial={{ x: -100, opacity: 0 }}
								whileInView={{ x: 0, opacity: 1 }}
								transition={{
									delay: 0.3,
									type: "spring",
								}}>
								<a href="mailto:tolumcev@gmail.com?subject=Hello&body=Hello Timi,">
									tolumcev@gmail.com
								</a>
							</motion.p>
							{/* icons */}
							<div className="flex justify-center items-center space-x-4">
								<motion.a
									href="mailto:tolumcev@gmail.com?subject=Hello&body=Hello Timi,"
									className="flex justify-center items-center bg-gray-700 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300"
									initial={{ y: 40, opacity: 0 }}
									whileInView={{ y: 0, opacity: 1 }}
									transition={{
										y: { delay: 0.1 },
										opacity: { delay: 0.2 },
									}}>
									<FontAwesomeIcon icon={faEnvelope} className="text-3xl" />
								</motion.a>

								<motion.a
									href="https://github.com/Timi953"
									target="_blank"
									rel="noopener noreferrer"
									className="flex justify-center items-center bg-gray-700 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300"
									initial={{ opacity: 0, y: 40 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{
										y: { delay: 0.2 },
										opacity: { delay: 0.3 },
									}}>
									<FontAwesomeIcon icon={faGithub} className="text-3xl" />
								</motion.a>
								<motion.a
									href="https://www.linkedin.com/in/timi-olumcev-951770205/"
									target="_blank"
									rel="noopener noreferrer"
									className="flex justify-center items-center bg-gray-700 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300"
									initial={{ opacity: 0, y: 40 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{
										y: { delay: 0.3 },
										opacity: { delay: 0.4 },
									}}>
									<FontAwesomeIcon icon={faLinkedin} className="text-3xl" />
								</motion.a>
							</div>
						</div>
						<div className="flex justify-center items-center order-1 md:order-2">
							<motion.div
								className="bg-slate-300 rounded-2xl h-[400px] md:h-[500px] w-full max-w-[400px] grayscale hover:grayscale-0 overflow-hidden relative"
								initial={{
									x: 100,
									opacity: 0,
								}}
								whileInView={{
									x: 0,
									opacity: 1,
								}}
								transition={{
									delay: 0.3,
									type: "spring",
									stiffness: 100,
									damping: 20,
								}}>
								<Image
									src={Setup}
									layout="fill"
									className="object-cover rounded-2xl"
									alt="Timi Olumcev Setup"
									placeholder="blur"
								/>
							</motion.div>
						</div>
					</div>
				</section>
			</div>
		</FullpageProvider>
	);
};

export default MyPage;
