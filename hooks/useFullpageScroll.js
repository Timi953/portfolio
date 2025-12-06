"use client";
import { useState, useEffect, useCallback, useRef } from "react";

const SCROLL_DURATION = 1000; // Match fullPage.js timing

// Ease-in-out cubic easing function
function easeInOutCubic(t) {
	return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export function useFullpageScroll(sectionIds) {
	const [activeSection, setActiveSection] = useState(sectionIds[0]);
	const isScrolling = useRef(false);
	const containerRef = useRef(null);

	// Smooth scroll to section with 1000ms duration
	const scrollToSection = useCallback((sectionId) => {
		const container = containerRef.current;
		const target = document.getElementById(sectionId);
		if (!container || !target || isScrolling.current) return;

		isScrolling.current = true;
		const start = container.scrollTop;
		const end = target.offsetTop;
		const distance = end - start;
		const startTime = performance.now();

		function animate(currentTime) {
			const elapsed = currentTime - startTime;
			const progress = Math.min(elapsed / SCROLL_DURATION, 1);
			const eased = easeInOutCubic(progress);

			container.scrollTop = start + distance * eased;

			if (progress < 1) {
				requestAnimationFrame(animate);
			} else {
				isScrolling.current = false;
				window.history.replaceState(null, "", `#${sectionId}`);
			}
		}

		requestAnimationFrame(animate);
	}, []);

	// IntersectionObserver to track active section
	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		const observers = sectionIds.map((id) => {
			const element = document.getElementById(id);
			if (!element) return null;

			const observer = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
						setActiveSection(id);
						if (!isScrolling.current) {
							window.history.replaceState(null, "", `#${id}`);
						}
					}
				},
				{ threshold: 0.5, root: container }
			);

			observer.observe(element);
			return { observer, element };
		});

		return () => observers.forEach((obs) => obs?.observer.disconnect());
	}, [sectionIds]);

	// Handle initial hash navigation on mount
	useEffect(() => {
		const hash = window.location.hash.slice(1);
		if (hash && sectionIds.includes(hash)) {
			// Delay to ensure DOM is ready
			setTimeout(() => {
				const target = document.getElementById(hash);
				if (target && containerRef.current) {
					containerRef.current.scrollTop = target.offsetTop;
					setActiveSection(hash);
				}
			}, 100);
		}
	}, [sectionIds]);

	return { activeSection, scrollToSection, containerRef };
}
