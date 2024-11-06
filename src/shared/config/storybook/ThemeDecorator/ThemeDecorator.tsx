import { StoryFn } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => {
	const Decorator = (StoryComponent: StoryFn) => (
		<ThemeProvider initialTheme={theme}>
			<div className={`app ${theme}`}>
				<StoryComponent />
			</div>
		</ThemeProvider>
	);

	Decorator.displayName = 'ThemeDecorator';
	return Decorator;
};
