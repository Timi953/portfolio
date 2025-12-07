"use client";
import { useTheme } from "@/context/ThemeContext";

const ThemeToggle = () => {
	const { toggleTheme, mounted } = useTheme();

	return (
		<button
			onClick={mounted ? toggleTheme : undefined}
			className="w-6 h-6 rounded-full bg-gray-400 dark:bg-gray-300 transition-transform duration-300 hover:scale-110 hover:bg-gray-500 dark:hover:bg-gray-200"
			aria-label="Toggle theme"
		/>
	);
};

export default ThemeToggle;
