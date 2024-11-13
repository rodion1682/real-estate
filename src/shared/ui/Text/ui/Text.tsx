import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
	PRIMARY = 'primary',
	ERROR = 'error',
}

interface TextProps {
	className?: string;
	title?: string;
	text?: string;
	theme?: TextTheme;
}

export const Text = (props: TextProps) => {
	const { className, title, text, theme = TextTheme.PRIMARY } = props;
	return (
		<div className={classNames(cls.Text, {}, [className, cls[theme]])}>
			{title && <p className={cls.Text__title}>{title}</p>}
			{text && <p className={cls.Text__text}>{text}</p>}
		</div>
	);
};
