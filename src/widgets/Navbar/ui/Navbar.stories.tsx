import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Navbar } from './Navbar';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
	title: 'widgets/Navbar',
	component: Navbar,
	args: {},
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
	args: {},
};
Light.decorators = [StoreDecorator({})];

export const Dark: Story = {
	args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const AuthNavbarLight: Story = {
	args: {},
};
AuthNavbarLight.decorators = [
	StoreDecorator({
		user: { authData: { id: '', username: '' } },
	}),
];

export const AuthNavbarDark: Story = {
	args: {},
};
AuthNavbarDark.decorators = [
	ThemeDecorator(Theme.DARK),
	StoreDecorator({
		user: { authData: { id: '', username: '' } },
	}),
];
