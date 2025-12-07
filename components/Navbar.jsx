"use client";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const NavItems = ({ isNavOpen, setIsNavOpen }) => {
	const [isMobile, setIsMobile] = useState(false);

	const handleItemClick = () => {
		setIsNavOpen(false);
	};
	const navVariant = {
		open: {
			clipPath: `circle(150vmax at calc(100% - 40px) 40px)`,
			transition: {
				duration: 0.5,
				ease: [0.32, 0.72, 0, 1],  // Smooth ease-out
			},
		},
		closed: {
			clipPath: "circle(0px at calc(100% - 120px) 35px)",
			transition: {
				delay: 0.1,  // Reduced from 0.5
				duration: 0.4,
				ease: [0.32, 0, 0.67, 0],  // Smooth ease-in
			},
		},
	};
	useEffect(() => {
		let timeoutId;
		const handleResize = () => {
			clearTimeout(timeoutId);
			timeoutId = setTimeout(() => {
				setIsMobile(window.innerWidth < 768);
			}, 100);
		};

		// Initial check
		setIsMobile(window.innerWidth < 768);

		window.addEventListener("resize", handleResize);
		return () => {
			clearTimeout(timeoutId);
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	// Check screen width and adjust clipPath for smaller screens
	if (isMobile) {
		navVariant.open = {
			clipPath: `circle(150vmax at calc(100% - 40px) 40px)`,
			transition: {
				duration: 0.5,
				ease: [0.32, 0.72, 0, 1],
			},
		};
		navVariant.closed = {
			clipPath: "circle(0px at calc(100% - 35px) 35px)",
			transition: {
				delay: 0.1,
				duration: 0.4,
				ease: [0.32, 0, 0.67, 0],
			},
		};
	} else {
		navVariant.open = {
			clipPath: `circle(150vmax at calc(100% - 40px) 40px)`,
			transition: {
				duration: 0.5,
				ease: [0.32, 0.72, 0, 1],
			},
		};
		navVariant.closed = {
			clipPath: "circle(0px at calc(100% - 120px) 35px)",
			transition: {
				delay: 0.1,
				duration: 0.4,
				ease: [0.32, 0, 0.67, 0],
			},
		};
	}
	const itemVariants = {
		open: (custom) => ({
			opacity: 1,
			x: 0,
			rotate: 0,
			transition: {
				delay: custom,
				duration: 0.4,
				ease: [0.32, 0.72, 0, 1],
			},
		}),
		closed: {
			opacity: 0,
			x: -40,  // Reduced from -80 for subtler motion
			rotate: 0,
			transition: {
				duration: 0.25,
				ease: [0.32, 0, 0.67, 0],
			},
		},
	};

	return (
		<>
			<motion.div
				style={{ willChange: 'clip-path' }}
				className={`fixed z-[45] w-full h-screen flex items-center justify-center overflow-hidden`}
				variants={navVariant}
				animate={isNavOpen ? "open" : "closed"}
				initial={false}>
				<div className="relative flex flex-col items-center space-x-8 min-h-[100vh] bg-gray-700/95 min-w-[100vw] backdrop-blur-md">
					<div className="flex flex-col items-center space-y-8 my-auto mx-0 z-50">
						{/* title */}
						<motion.h1
							variants={itemVariants}
							animate={isNavOpen ? "open" : "closed"}
							className="text-6xl font-bold text-white ">
							Menu
						</motion.h1>
						<Link href="/#home">
							<motion.div
								className="text-2xl font-bold text-white cursor-pointer"
								onClick={handleItemClick}
								variants={itemVariants}
								animate={isNavOpen ? "open" : "closed"}
								custom={0.1}
								whileHover={{ scale: 1.25 }}
								transition={{ type: "tween", duration: 0.15 }}>
								Home
							</motion.div>
						</Link>
						<Link href="/about">
							<motion.div
								onClick={handleItemClick}
								className="text-2xl font-bold text-white cursor-pointer"
								variants={itemVariants}
								animate={isNavOpen ? "open" : "closed"}
								custom={0.2}
								whileHover={{ scale: 1.25 }}
								transition={{ type: "tween", duration: 0.15 }}>
								About
							</motion.div>
						</Link>
						<Link href="/projects">
							<motion.div
								onClick={handleItemClick}
								className="text-2xl font-bold text-white cursor-pointer"
								variants={itemVariants}
								animate={isNavOpen ? "open" : "closed"}
								custom={0.3}
								whileHover={{ scale: 1.25 }}
								transition={{ type: "tween", duration: 0.15 }}>
								Projects
							</motion.div>
						</Link>
						<Link href="/#contact">
							<motion.div
								onClick={handleItemClick}
								className="text-2xl font-bold text-white cursor-pointer"
								variants={itemVariants}
								animate={isNavOpen ? "open" : "closed"}
								custom={0.4}
								whileHover={{ scale: 1.25 }}
								transition={{ type: "tween", duration: 0.15 }}>
								Contact
							</motion.div>
						</Link>
					</div>
				</div>
			</motion.div>
		</>
	);
};

const Navbar = () => {
	const navRef = useRef(null);
	const [isNavOpen, setIsNavOpen] = useState(false);

	const toggleNav = () => {
		setIsNavOpen(!isNavOpen);
	};

	return (
		<>
			<nav
				ref={navRef}
				className={`navbar px-5 md:px-24 w-screen fixed transition-colors ease duration-500 ${
					isNavOpen
						? "backdrop-filter backdrop-blur-md bg-gray-700 bg-opacity-50"
						: "backdrop-filter backdrop-blur-md"
				} inset-0  bg-opacity-50 flex flex-row justify-between items-center h-16 z-50 `}>
				<div>
					<h1
						className={`text-2xl ml-2 md:ml-0 transition-colors ease duration-500 dark:text-white ${
							isNavOpen ? "text-white" : ""
						}`}>
						Timi Olumcev
					</h1>
				</div>
				<div className="flex flex-row items-center gap-4">
					<ThemeToggle />
					<button
						className="burger button flex flex-col justify-center items-center space-y-1.5 "
						onClick={toggleNav}>
						<div
							className={`w-10 h-1 bg-black dark:bg-white rounded-full transition-[transform,background-color] ease-out duration-300 ${
								isNavOpen ? "rotate-45 bg-white translate-y-[2px]" : ""
							}`}></div>
						<div
							className={`w-10 h-1 bg-black dark:bg-white rounded-full transition-[transform,background-color] ease-out duration-300 ${
								isNavOpen ? "-rotate-45 -translate-y-2 bg-white" : ""
							}`}></div>
					</button>
				</div>
			</nav>
			{/* items */}
			<NavItems isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
		</>
	);
};
export default Navbar;
