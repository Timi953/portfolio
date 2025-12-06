"use client";
import { createContext, useContext } from "react";

const FullpageContext = createContext(null);

export function FullpageProvider({ children, value }) {
	return (
		<FullpageContext.Provider value={value}>
			{children}
		</FullpageContext.Provider>
	);
}

export function useFullpageContext() {
	const context = useContext(FullpageContext);
	if (!context) {
		throw new Error("useFullpageContext must be used within FullpageProvider");
	}
	return context;
}
