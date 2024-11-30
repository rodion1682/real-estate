import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import MainPage from './MainPage';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
	title: 'pages/MainPage',
	component: MainPage,
	args: {},
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
	args: {},
};
Light.decorators = [
	StoreDecorator({
		objectsFilters: {
			dealType: {
				sale: true,
				rent: false,
			},
			objectType: {
				apartaments: true,
				house: false,
			},
			search: '',
			price: {
				from: 0,
				to: 0,
			},
			area: {
				from: 0,
				to: 0,
			},
		},
	}),
];

export const Dark: Story = {
	args: {},
};
Dark.decorators = [
	ThemeDecorator(Theme.DARK),
	StoreDecorator({
		objectsFilters: {
			dealType: {
				sale: true,
				rent: false,
			},
			objectType: {
				apartaments: true,
				house: false,
			},
			search: '',
			price: {
				from: 0,
				to: 0,
			},
			area: {
				from: 0,
				to: 0,
			},
		},
	}),
];
