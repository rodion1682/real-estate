import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Slider } from './Slider';
import slide1 from 'shared/assets/tests/1.jpg';
import slide2 from 'shared/assets/tests/2.jpg';
import slide3 from 'shared/assets/tests/3.jpg';

const meta = {
	title: 'shared/Slider',
	component: Slider,
	args: {
		slides: [slide1, slide2, slide3],
	},
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
