import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';
const meta = {
	title: 'shared/Text',
	component: Text,
	args: {},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
	args: {
		title: 'Title title title',
		text: 'Description description description description',
	},
};

export const Dark: Story = {
	args: {
		title: 'Title title title',
		text: 'Description description description description',
	},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const ErrorLight: Story = {
	args: {
		title: 'Title title title',
		text: 'Description description description description',
		theme: TextTheme.ERROR,
	},
};

export const ErrorDark: Story = {
	args: {
		title: 'Title title title',
		text: 'Description description description description',
		theme: TextTheme.ERROR,
	},
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitle: Story = {
	args: {
		title: 'Title title title',
	},
};

export const OnlyTitleDark: Story = {
	args: {
		title: 'Title title title',
	},
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyText: Story = {
	args: {
		text: 'Description description description description',
	},
};

export const OnlyTextDark: Story = {
	args: {
		text: 'Description description description description',
	},
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];
