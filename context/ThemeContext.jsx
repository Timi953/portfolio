"use client";
import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext({
	theme: "light",
	toggleTheme: () => {},
	mounted: false,
});

export function ThemeProvider({ children }) {
	const [theme, setTheme] = useState("light");
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		const stored = localStorage.getItem("theme") || "light";
		setTheme(stored);
		if (stored === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, []);

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		localStorage.setItem("theme", newTheme);
		if (newTheme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme, mounted }}>
			{children}
		</ThemeContext.Provider>
	);
}

export const useTheme = () => useContext(ThemeContext);
