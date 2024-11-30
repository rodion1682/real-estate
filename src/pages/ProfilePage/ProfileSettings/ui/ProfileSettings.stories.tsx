import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import ProfileSettings from './ProfileSettings';

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
Light.decorators = [StoreDecorator({})];

export const Dark: Story = {
	args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
