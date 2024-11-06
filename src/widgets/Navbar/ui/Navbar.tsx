import { classNames } from 'shared/lib/classNames/classNames';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './Navbar.module.scss';
import { Link } from 'react-router-dom';
import { AppLink } from 'shared/ui/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';

interface NavbarProps {
	className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<div className={cls.Navbar__actions}>
				<AppLink to={RoutePath.main}>Main</AppLink>
				<AppLink to={RoutePath.apartment}>Apartament</AppLink>
				<ThemeSwitcher />
				<LangSwitcher />
			</div>
		</div>
	);
};
