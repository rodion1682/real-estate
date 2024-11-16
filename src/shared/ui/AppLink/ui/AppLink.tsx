import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';
import { Link, LinkProps } from 'react-router-dom';
import { memo, ReactNode } from 'react';

export enum AppLinkTheme {
	NAVBAR = 'navbar',
	PROFILE = 'profile',
}

interface AppLinkProps extends LinkProps {
	className?: string;
	theme?: AppLinkTheme;
	children?: ReactNode;
	active?: boolean;
}

export const AppLink = memo((props: AppLinkProps) => {
	const {
		className,
		to,
		children,
		active,
		theme = AppLinkTheme.NAVBAR,
		...otherProps
	} = props;
	return (
		<Link
			className={classNames(cls.AppLink, { [cls.active]: active }, [
				className,
				cls[theme],
			])}
			to={to}
			{...otherProps}
		>
			{children}
		</Link>
	);
});
