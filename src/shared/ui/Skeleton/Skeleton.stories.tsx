import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Skeleton } from './Skeleton';

const meta = {
	title: 'shared/Skeleton',
	component: Skeleton,
	args: {},
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
	args: {
		width: '100%',
		height: 200,
	},
};
export const Circle: Story = {
	args: {
		border: '50%',
		width: 100,
		height: 100,
	},
};

export const Dark: Story = {
	args: { width: '100%', height: 200 },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const CircleDark: Story = {
	args: {
		border: '50%',
		width: 100,
		height: 100,
	},
};
CircleDark.decorators = [ThemeDecorator(Theme.DARK)];
