import { classNames } from 'shared/lib/classNames/classNames';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './Navbar.module.scss';
import { AppLink } from 'shared/ui/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
	className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation('');
	return (
		<div
			className={classNames(cls.Navbar, {}, [className])}
			data-testid="navbar"
		>
			<div className={cls.Navbar__actions}>
				<AppLink to={RoutePath.main}>{t('Main page')}</AppLink>
				<AppLink to={RoutePath.apartment}>{t('Apartament page')}</AppLink>
				<ThemeSwitcher className={cls.Navbar__theme} />
				<LangSwitcher />
			</div>
		</div>
	);
};
