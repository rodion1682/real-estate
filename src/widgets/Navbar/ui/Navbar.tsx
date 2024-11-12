import { classNames } from 'shared/lib/classNames/classNames';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './Navbar.module.scss';
import { AppLink } from 'shared/ui/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal';
import { useCallback, useState } from 'react';
import { Button } from 'shared/ui/Button/ui/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { LoginModal } from 'features/AuthByUsername';

interface NavbarProps {
	className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation('');
	const [isAuthModal, setIsAuthModal] = useState(false);
	const onCloseModal = useCallback(() => {
		setIsAuthModal(false);
	}, []);
	const onOpenModal = useCallback(() => {
		setIsAuthModal(true);
	}, []);
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
				<Button onClick={onOpenModal}>{t('Sing in')}</Button>
				<LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
			</div>
		</div>
	);
};
