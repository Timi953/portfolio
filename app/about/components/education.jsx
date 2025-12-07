import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMedal,
	faGraduationCap,
	faTrophy,
	faAward,
	faChevronDown,
	faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import EduHats from "@/public/image/edu-hats.jpg";
import EduDiploma from "@/public/image/edu-diploma.jpg";
import EduUniversity from "@/public/image/edu-university.jpg";

function Wrapper({ children }) {
	return (
		<div className="mx-auto container gap-10 p-10 grid grid-cols-1 my-10">
			<motion.div
				className="flex justify-center items-start flex-col mb-5"
				initial={{
					opacity: 0,
					y: 50,
				}}
				whileInView={{
					opacity: 1,
					y: 0,
				}}
				transition={{
					delay: 0.3,
					duration: 0.8,
					type: "spring",
					stiffness: 100,
				}}>
				{children}
			</motion.div>
		</div>
	);
}

export default function Education() {
	const [isExpanded, setIsExpanded] = useState(false);

	const achievementsByYear = {
		2024: [
			{
				icon: faAward,
				title: "Certified Software Tester (CSTE)",
				subtitle: "Brainster",
				date: "2024",
				color: "from-blue-500 to-purple-600",
			},
		],
		"LinkedIn": [
			{
				icon: faAward,
				title: "MySQL Skill Assessment",
				subtitle: "LinkedIn Learning",
				date: "LinkedIn",
				color: "from-blue-400 to-cyan-500",
			},
			{
				icon: faAward,
				title: "JSON Skill Assessment",
				subtitle: "LinkedIn Learning",
				date: "LinkedIn",
				color: "from-blue-400 to-cyan-500",
			},
			{
				icon: faAward,
				title: "Object-Oriented Programming (OOP)",
				subtitle: "LinkedIn Learning",
				date: "LinkedIn",
				color: "from-purple-500 to-pink-500",
			},
			{
				icon: faAward,
				title: "Agile Methodologies",
				subtitle: "LinkedIn Learning",
				date: "LinkedIn",
				color: "from-green-500 to-teal-500",
			},
			{
				icon: faAward,
				title: "C# / .NET Skill Assessment",
				subtitle: "LinkedIn Learning",
				date: "LinkedIn",
				color: "from-indigo-500 to-blue-600",
			},
		],
	};

	// Flatten all achievements into a single array for easier limiting
	const allAchievements = Object.entries(achievementsByYear)
		.sort(([a], [b]) => parseInt(b) - parseInt(a))
		.flatMap(([year, achievements]) =>
			achievements.map((achievement) => ({ ...achievement, year }))
		);

	const visibleAchievements = isExpanded
		? allAchievements
		: allAchievements.slice(0, 6);
	const hasMoreAchievements = allAchievements.length > 6;

	return (
		<Wrapper>
			<section className="grid gap-8 md:gap-12">
				{" "}
				{/* Header */}
				<motion.div
					className="text-center space-y-2"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}>
					<h1 className="text-3xl md:text-4xl font-bold tracking-tighter dark:text-white">
						Education
					</h1>
					<p className="text-muted-foreground max-w-[800px] mx-auto">
						Get to know more about my educational background.
					</p>
				</motion.div>
				{/* Main Content */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{/* Education Section - Left */}
					<motion.div
						className="px-5"
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}>
						<div className="font-medium text-lg mb-4 dark:text-white">2011 - 2015</div>
						<div>
							<h2 className="font-semibold text-xl dark:text-white">
								Universitatea OVIDIUS din Constanta
							</h2>
							<h3 className="text-md font-normal mb-3">
								Diploma of Education, Medicine
							</h3>
							<div className="gap-4 mb-4 flex items-stretch md:h-[300px] xl:h-[400px]">
								<div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
									<Image
										src={EduHats}
										width={400}
										height={225}
										alt="Graduation Hats"
										className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
									/>
								</div>
								<div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
									<Image
										src={EduDiploma}
										width={400}
										height={225}
										alt="Diploma"
										className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
									/>
								</div>
								<div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
									<Image
										src={EduUniversity}
										width={400}
										height={225}
										alt="University"
										className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
									/>
								</div>
							</div>
							<div className="flex items-center gap-2">
								<p className="text-gray-600 dark:text-gray-400 text-justify title text-lg">
									My academic journey began in{" "}
									<span className="text-black dark:text-white font-medium">
										medicine
									</span>{" "}
									at{" "}
									<span className="text-black dark:text-white font-medium">
										Universitatea OVIDIUS din Constanta, Romania
									</span>
									. While my path eventually led me to technology and software development, the rigorous
									training in medical sciences taught me{" "}
									<span className="text-black dark:text-white font-medium">
										attention to detail, systematic thinking, and the importance of continuous learning
									</span>
									—skills that serve me exceptionally well in AI development and automation today.
									<br />
									<br />
									Transitioning from medicine to technology wasn&rsquo;t just a career change—it was discovering where
									I truly belonged. The analytical mindset from my medical education combined with my passion for{" "}
									<span className="text-black dark:text-white font-medium">
										problem-solving and innovation
									</span>{" "}
									naturally led me to software development, where I could build systems that help people at scale.
									<br />
									<br />
									Today, I bring that same dedication to precision and reliability from medicine into every line of code I write,
									ensuring that the AI systems and automation solutions I build are not just functional, but{" "}
									<span className="text-black dark:text-white font-medium">
										trustworthy and impactful
									</span>
									.
								</p>
							</div>
							<div className="flex flex-wrap gap-2 mt-4 text-sm">
								<div className="bg-gray-300 dark:bg-gray-700 text-black dark:text-white px-2 py-1 rounded-2xl">
									Graduated: 2015
								</div>
							</div>
						</div>
					</motion.div>{" "}
					{/* Achievements Section - Right */}
					<motion.div
						className="flex flex-col justify-start px-5 md:px-0"
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}>
						<h2 className="font-semibold text-xl mt-7 dark:text-white">Certifications & Training</h2>
						<p className="text-md font-normal mb-3 md:mb-6">
							Professional certifications and training programs completed.
						</p>

						{/* Achievements Container with transparent bottom effect */}
						<div className="relative">
							<div className="space-y-4">
								{/* Show visible achievements */}
								<AnimatePresence>
									{visibleAchievements.map((achievement, index) => (
										<motion.div
											key={`${achievement.year}-${index}`}
											className="group"
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											exit={{ opacity: 0, y: -20 }}
											transition={{ duration: 0.5, delay: index * 0.05 }}>
											{/* Year indicator for first achievement of each year */}
											{index === 0 ||
											visibleAchievements[index - 1]?.year !==
												achievement.year ? (
												<div className="flex items-center gap-3 mb-3 mt-2">
													<div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
														<span className="text-xs font-bold text-gray-600">
															{achievement.year}
														</span>
													</div>
													<div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
												</div>
											) : null}

											{/* Glassmorphism achievement card with monochrome to color effect */}
											<div className="bg-white/20 dark:bg-gray-800/30 backdrop-blur-md border border-white/30 dark:border-gray-600/30 rounded-2xl p-4 shadow-lg hover:bg-white/30 dark:hover:bg-gray-700/30 transition-all duration-300 hover:shadow-xl grayscale hover:grayscale-0">
												<div className="flex items-center gap-4">
													<div
														className={`aspect-square w-10 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center text-primary-foreground transition-all duration-300`}>
														<FontAwesomeIcon
															icon={achievement.icon}
															className="text-white h-5 w-5"
														/>
													</div>
													<div>
														<h3 className="font-medium dark:text-white">{achievement.title}</h3>
														<p className="text-sm dark:text-gray-300">{achievement.subtitle}</p>
														<div className="text-xs text-gray-500 mt-1">
															{achievement.date}
														</div>
													</div>
												</div>
											</div>
										</motion.div>
									))}
								</AnimatePresence>
							</div>

							{/* Transparent bottom overlay when not expanded */}
							{!isExpanded && hasMoreAchievements && (
								<div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-stale-300 via-stale/70 to-transparent pointer-events-none"></div>
							)}

							{/* Expand/Collapse Button */}
							{hasMoreAchievements && (
								<motion.div
									className="flex justify-center mt-6"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: 0.5 }}>
									<button
										onClick={() => setIsExpanded(!isExpanded)}
										className="flex items-center gap-2 px-6 py-3 bg-white/30 backdrop-blur-md border border-white/40 rounded-full hover:bg-white/40 transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl">
										<span>
											{isExpanded
												? `Show Less`
												: `Show ${allAchievements.length - 4} More`}
										</span>
										<FontAwesomeIcon
											icon={isExpanded ? faChevronUp : faChevronDown}
											className="h-3 w-3 transition-transform duration-300"
										/>
									</button>
								</motion.div>
							)}
						</div>
					</motion.div>
				</div>
			</section>
		</Wrapper>
	);
}
