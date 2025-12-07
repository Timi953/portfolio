"use client";
import { useState } from "react";
import { useFullpageContext } from "@/context/FullpageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHome,
	faUser,
	faFolderOpen,
	faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const SECTIONS = [
	{ id: "home", icon: faHome },
	{ id: "about", icon: faUser },
	{ id: "projects", icon: faFolderOpen },
	{ id: "contact", icon: faEnvelope },
];

const Sidebar = () => {
	const { activeSection, scrollToSection } = useFullpageContext();
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			className={`hidden md:flex fixed z-40 bg-gray-700 h-[50vh] flex-col justify-between items-center p-4 left-0 top-1/4 rounded-e-3xl transition-all duration-300 ease-out ${isHovered ? "w-16" : "w-14"}`}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}>
			<ul
				id="sidebar"
				className="flex flex-col justify-evenly items-center h-full text-gray-50">
				{SECTIONS.map(({ id, icon }) => (
					<li
						key={id}
						data-menuanchor={id}
						className={activeSection === id ? "active" : ""}>
						<button
							onClick={() => scrollToSection(id)}
							className="p-2 transition-transform duration-200 ease-out hover:scale-125">
							<FontAwesomeIcon
								icon={icon}
								className="text-xl transition-all duration-200 hover:text-white"
							/>
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Sidebar;
