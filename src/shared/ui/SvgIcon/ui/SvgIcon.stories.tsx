import type { Meta, StoryObj } from '@storybook/react';
import ThemeIcon from 'shared/assets/theme.svg';
import { SvgIcon } from './SvgIcon';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
	title: 'shared/SvgIcon',
	component: SvgIcon,
	args: {},
} satisfies Meta<typeof SvgIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
	args: {
		children: <ThemeIcon />,
	},
};

export const Dark: Story = {
	args: {
		children: <ThemeIcon />,
	},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
