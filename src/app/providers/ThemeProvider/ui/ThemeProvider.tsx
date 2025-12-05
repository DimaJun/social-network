import { createContext, ReactNode, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
	theme?: Theme;
	toggleTheme?: () => void;
	setTheme?: (theme: Theme) => void;
}

interface ThemeProviderProps {
	children: ReactNode;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: ThemeProviderProps) {
	const [theme, setTheme] = useState<Theme>(() => {
		const savedTheme = localStorage.getItem('theme') as Theme | null;
		if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
			return savedTheme;
		}

		return 'dark';
	});

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('theme', theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
	};

	const value: ThemeContextType = {
		theme,
		setTheme,
		toggleTheme,
	};

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
