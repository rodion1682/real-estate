import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Switcher } from './Switcher';

const meta = {
	title: 'shared/Switcher',
	component: Switcher,
	args: {
		firstValue: 'Value 1',
		secondValue: `Value 2`,
	},
} satisfies Meta<typeof Switcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
	args: {},
};

export const Dark: Story = {
	args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
