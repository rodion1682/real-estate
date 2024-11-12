import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import { ButtonHTMLAttributes, FC } from 'react';

export enum ButtonTheme {
	MAIN_BUTTON = 'main_button',
	THEME_SWITCHER = 'theme_switcher',
	LANG_SWITCHER = 'lang_switcher',
	PASSWORD = 'password',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = (props) => {
	const {
		className,
		children,
		theme = ButtonTheme.MAIN_BUTTON,
		...otherProps
	} = props;
	return (
		<button
			type="button"
			className={classNames(cls.Button, {}, [className, cls[theme]])}
			{...otherProps}
		>
			{children}
		</button>
	);
};
