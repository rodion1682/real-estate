import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import AvatarIcon from 'shared/assets/tests/avatar.jpg';

const meta = {
	title: 'shared/Avatar',
	component: Avatar,
	args: {},
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		src: AvatarIcon,
	},
};
export const CustomSize: Story = {
	args: {
		src: AvatarIcon,
		size: 200,
	},
};
