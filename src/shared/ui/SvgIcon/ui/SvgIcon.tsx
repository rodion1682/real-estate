import { classNames } from 'shared/lib/classNames/classNames';

import cls from './SvgIcon.module.scss';
import { memo, ReactNode } from 'react';

export enum SvgIconThemes {
	NAVBAR_THEME = 'navbar_theme',
}

interface SvgIconProps {
	className?: string;
	children?: ReactNode;
	theme?: SvgIconThemes;
}

export const SvgIcon = memo((props: SvgIconProps) => {
	const { className, children, theme = SvgIconThemes.NAVBAR_THEME } = props;
	return (
		<div className={classNames(cls.SvgIcon, {}, [className, cls[theme]])}>
			{children}
		</div>
	);
});
