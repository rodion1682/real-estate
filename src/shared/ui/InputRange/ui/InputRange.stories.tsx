import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { InputRange } from './InputRange';
import { InputTheme } from 'shared/ui/Input/ui/Input';

const meta = {
	title: 'shared/InputRange',
	component: InputRange,
	args: {},
} satisfies Meta<typeof InputRange>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EuroRange: Story = {
	args: {
		theme: InputTheme.EURO,
	},
};

export const EuroRangeDark: Story = {
	args: { theme: InputTheme.EURO },
};
EuroRangeDark.decorators = [ThemeDecorator(Theme.DARK)];
