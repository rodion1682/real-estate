import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import { ButtonHTMLAttributes, ForwardedRef, memo, ReactNode } from 'react';

import ChevroneIcon from 'shared/assets/chevrone.svg';
import { SvgIcon, SvgIconThemes } from 'shared/ui/SvgIcon/ui/SvgIcon';

export enum ButtonTheme {
	MAIN_BUTTON = 'main_button',
	THEME_SWITCHER = 'theme_switcher',
	LANG_SWITCHER = 'lang_switcher',
	PASSWORD = 'password',
	SUBMIT = 'submit',
	CANCEL = 'cancel',
	DROPDOWN = 'dropdown',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ButtonTheme;
	disabled?: boolean;
	children?: ReactNode;
	active?: boolean;
	open?: boolean;
}

export const Button = memo((props: ButtonProps) => {
	const {
		className,
		children,
		theme = ButtonTheme.MAIN_BUTTON,
		disabled,
		active,
		open,
		...otherProps
	} = props;
	const mods = {
		[cls.disabled]: disabled,
		[cls.active]: active,
		[cls.dropdown_open]: open,
	};
	return (
		<button
			type="button"
			className={classNames(cls.Button, mods, [className, cls[theme]])}
			{...otherProps}
			disabled={disabled}
		>
			{children}
			{theme === ButtonTheme.DROPDOWN && (
				<SvgIcon
					className={cls.dropdown__icon}
					theme={SvgIconThemes.SMALL}
					children={<ChevroneIcon />}
				/>
			)}
		</button>
	);
});
