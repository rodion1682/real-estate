import { classNames } from 'shared/lib/classNames/classNames';

import cls from './SvgIcon.module.scss';
import { ReactNode } from 'react';

export enum SvgIconSizes {
	NAVBAR_SIZE = 'navbar_size',
	NAVBAR_LANG_SIZE = 'navbar_lang_size',
}

interface SvgIconProps {
	className?: string;
	children?: ReactNode;
	size?: SvgIconSizes;
}

export const SvgIcon = (props: SvgIconProps) => {
	const { className, children, size = SvgIconSizes.NAVBAR_SIZE } = props;
	return (
		<div className={classNames(cls.SvgIcon, {}, [className, cls[size]])}>
			{children}
		</div>
	);
};
