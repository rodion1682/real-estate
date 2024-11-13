import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { LoginForm } from './LoginForm';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
	title: 'features/LoginForm',
	component: LoginForm,
	args: {},
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
	args: {},
};
Light.decorators = [
	StoreDecorator({
		loginForm: { username: '123', password: 'asd', isLoading: false },
	}),
];

export const Dark: Story = {
	args: {},
};
Dark.decorators = [
	ThemeDecorator(Theme.DARK),
	StoreDecorator({
		loginForm: { username: '123', password: 'asd', isLoading: false },
	}),
];

export const LoadingLight: Story = {
	args: {},
};
LoadingLight.decorators = [
	StoreDecorator({
		loginForm: { username: '123', password: 'asd', isLoading: true },
	}),
];

export const LoadingDark: Story = {
	args: {},
};
LoadingDark.decorators = [
	ThemeDecorator(Theme.DARK),
	StoreDecorator({
		loginForm: { username: '123', password: 'asd', isLoading: true },
	}),
];

export const WithErrorLight: Story = {
	args: {},
};
WithErrorLight.decorators = [
	StoreDecorator({
		loginForm: {
			username: '123',
			password: 'asd',
			isLoading: false,
			error: 'Error message',
		},
	}),
];

export const WithErrorDark: Story = {
	args: {},
};
WithErrorDark.decorators = [
	ThemeDecorator(Theme.DARK),
	StoreDecorator({
		loginForm: {
			username: '123',
			password: 'asd',
			isLoading: false,
			error: 'Error message',
		},
	}),
];
