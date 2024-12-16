import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import ProfileSettings from './ProfileSettings';
import { Currency } from 'shared/consts/common';
import AvatarIcon from 'shared/assets/tests/avatar.jpg';

const meta = {
	title: 'pages/ProfilePage/ProfileSettings',
	component: ProfileSettings,
	args: {},
} satisfies Meta<typeof ProfileSettings>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
	args: {},
};
Light.decorators = [
	StoreDecorator({
		profile: {
			form: {
				username: 'admin',
				lastname: 'lastname',
				age: 24,
				city: 'asda',
				currency: Currency.EUR,
				avatar: AvatarIcon,
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
		profile: {
			form: {
				username: 'admin',
				lastname: 'lastname',
				age: 24,
				city: 'asda',
				currency: Currency.EUR,
				avatar: AvatarIcon,
			},
		},
	}),
];
