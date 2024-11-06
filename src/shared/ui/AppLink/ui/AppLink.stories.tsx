import type { Meta, StoryObj } from '@storybook/react';
import { AppLink } from './AppLink';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
	title: 'shared/AppLink',
	component: AppLink,
	args: {
		to: '/',
	},
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
	args: {
		children: 'Text',
	},
};

export const Dark: Story = {
	args: {
		children: 'Text',
	},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
