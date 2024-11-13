import { classNames } from 'shared/lib/classNames/classNames';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './Navbar.module.scss';
import { AppLink } from 'shared/ui/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import { Button } from 'shared/ui/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';

interface NavbarProps {
	className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation('');
	const [isAuthModal, setIsAuthModal] = useState(false);
	const authData = useSelector(getUserAuthData);
	const dispatch = useDispatch();

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false);
	}, []);
	const onOpenModal = useCallback(() => {
		setIsAuthModal(true);
	}, []);
	const onLogout = useCallback(() => {
		dispatch(userActions.logout());
	}, [dispatch]);
	if (authData) {
		return (
			<div
				className={classNames(cls.Navbar, {}, [className])}
				data-testid="navbar"
			>
				<div className={cls.Navbar__actions}>
					<AppLink to={RoutePath.main}>{t('Main page')}</AppLink>
					<AppLink to={RoutePath.apartment}>
						{t('Apartament page')}
					</AppLink>
					<ThemeSwitcher className={cls.Navbar__theme} />
					<LangSwitcher />
					<Button onClick={onLogout}>{t('Log out')}</Button>
					<LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
				</div>
			</div>
		);
	}
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
				{isAuthModal && (
					<LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
				)}
			</div>
		</div>
	);
};
