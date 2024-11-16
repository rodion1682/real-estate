import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import { ButtonHTMLAttributes, memo, ReactNode } from 'react';

export enum ButtonTheme {
	MAIN_BUTTON = 'main_button',
	THEME_SWITCHER = 'theme_switcher',
	LANG_SWITCHER = 'lang_switcher',
	PASSWORD = 'password',
	SUBMIT = 'submit',
	CANCEL = 'cancel',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ButtonTheme;
	disabled?: boolean;
	children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
	const {
		className,
		children,
		theme = ButtonTheme.MAIN_BUTTON,
		disabled,
		...otherProps
	} = props;
	return (
		<button
			type="button"
			className={classNames(cls.Button, { [cls.disabled]: disabled }, [
				className,
				cls[theme],
			])}
			{...otherProps}
			disabled={disabled}
		>
			{children}
		</button>
	);
});
