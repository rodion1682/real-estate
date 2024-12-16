import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ProfileCard } from './ProfileCard';
import { Currency } from 'shared/consts/common';
import AvatarIcon from 'shared/assets/tests/avatar.jpg';

const meta = {
	title: 'entities/ProfileCard',
	component: ProfileCard,
	args: {},
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		data: {
			username: 'admin',
			lastname: 'lastname',
			age: 24,
			city: 'asda',
			currency: Currency.EUR,
			avatar: AvatarIcon,
		},
	},
};

export const PrimaryDark: Story = {
	args: {
		data: {
			username: 'admin',
			lastname: 'lastname',
			age: 24,
			city: 'asda',
			currency: Currency.EUR,
			avatar: AvatarIcon,
		},
	},
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const withError: Story = {
	args: {
		error: 'true',
	},
};

export const Loading: Story = {
	args: {
		isLoading: true,
	},
};
