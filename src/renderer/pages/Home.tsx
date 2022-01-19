import { useTheme } from "../context/ThemeContext";

export function Home() {
	const { theme, setTheme } = useTheme();

	return (
		<button
			style={{ background: theme === "dark" ? "#333" : "#ccc" }}
			onClick={() =>
				setTheme((oldTheme) => (oldTheme === "dark" ? "light" : "dark"))
			}
		>
			Toggle theme
		</button>
	);
}
