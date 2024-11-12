import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Input, InputTheme, InputType } from './Input';

const meta = {
	title: 'shared/Input',
	component: Input,
	args: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EmptyInput: Story = {
	args: {},
};

export const EmptyInputDark: Story = {
	args: {},
};
EmptyInputDark.decorators = [ThemeDecorator(Theme.DARK)];

export const MainInput: Story = {
	args: {
		value: 'asdewreesfesf',
	},
};

export const MainInputDark: Story = {
	args: {
		value: 'asdewreesfesf',
	},
};
MainInputDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SearchInput: Story = {
	args: {
		value: 'asdewreesfesf',
		theme: InputTheme.SEARCH_INPUT,
	},
};

export const SearchInputDark: Story = {
	args: {
		value: 'asdewreesfesf',
		theme: InputTheme.SEARCH_INPUT,
	},
};
SearchInputDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PasswordInput: Story = {
	args: {
		value: 'asdewreesfesf',
		type: InputType.PASSWORD,
		theme: InputTheme.PASSWORD_INPUT,
	},
};

export const PasswordInputDark: Story = {
	args: {
		value: 'asdewreesfesf',
		type: InputType.PASSWORD,
		theme: InputTheme.PASSWORD_INPUT,
	},
};
PasswordInputDark.decorators = [ThemeDecorator(Theme.DARK)];
