import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button, ButtonTheme } from './Button';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { SvgIcon } from 'shared/ui/SvgIcon/ui/SvgIcon';
import ThemeIcon from 'shared/assets/theme.svg';
import LangIcon from 'shared/assets/lang.svg';
import EyeIcon from 'shared/assets/eye.svg';

const meta = {
	title: 'shared/Button',
	component: Button,
	args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainButton: Story = {
	args: {
		children: 'Text',
	},
};

export const MainButtonDark: Story = {
	args: {
		children: 'Text',
	},
};
MainButtonDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ThemeSwitcherButton: Story = {
	args: {
		children: (
			<SvgIcon>
				<ThemeIcon />
			</SvgIcon>
		),
		theme: ButtonTheme.THEME_SWITCHER,
	},
};

export const ThemeSwitcherButtonDark: Story = {
	args: {
		children: (
			<SvgIcon>
				<ThemeIcon />
			</SvgIcon>
		),
		theme: ButtonTheme.THEME_SWITCHER,
	},
};
ThemeSwitcherButtonDark.decorators = [ThemeDecorator(Theme.DARK)];

const LangComponent = () => {
	return (
		<>
			<SvgIcon>
				<LangIcon />
			</SvgIcon>
			{}
			<span>En</span>
		</>
	);
};

export const LangSwitcherButton: Story = {
	args: {
		children: <LangComponent />,
		theme: ButtonTheme.LANG_SWITCHER,
	},
};

export const LangSwitcherButtonDark: Story = {
	args: {
		children: <LangComponent />,
		theme: ButtonTheme.LANG_SWITCHER,
	},
};
LangSwitcherButtonDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PasswordButton: Story = {
	args: {
		children: (
			<SvgIcon>
				<EyeIcon />
			</SvgIcon>
		),
		theme: ButtonTheme.PASSWORD,
	},
};

export const PasswordButtonDark: Story = {
	args: {
		children: (
			<SvgIcon>
				<EyeIcon />
			</SvgIcon>
		),
		theme: ButtonTheme.PASSWORD,
	},
};
PasswordButtonDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Disabled: Story = {
	args: {
		children: 'Text',
		disabled: true,
		theme: ButtonTheme.SUBMIT,
	},
};

export const DisabledDark: Story = {
	args: {
		children: 'Text',
		disabled: true,
		theme: ButtonTheme.SUBMIT,
	},
};
DisabledDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Dropdown: Story = {
	args: {
		children: 'Text',
		theme: ButtonTheme.DROPDOWN,
	},
};

export const DropdownOpen: Story = {
	args: {
		children: 'Text',
		open: true,
		theme: ButtonTheme.DROPDOWN,
	},
};

export const DropdownDark: Story = {
	args: {
		children: 'Text',
		theme: ButtonTheme.DROPDOWN,
	},
};
DropdownDark.decorators = [ThemeDecorator(Theme.DARK)];

export const DropdownOpenDark: Story = {
	args: {
		children: 'Text',
		open: true,
		theme: ButtonTheme.DROPDOWN,
	},
};
DropdownOpenDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Select: Story = {
	args: {
		children: 'Text',
		theme: ButtonTheme.SELECT,
	},
};
DropdownDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SelectDark: Story = {
	args: {
		children: 'Text',
		open: true,
		theme: ButtonTheme.SELECT,
	},
};
SelectDark.decorators = [ThemeDecorator(Theme.DARK)];
