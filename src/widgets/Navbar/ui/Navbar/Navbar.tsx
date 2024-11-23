import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { Button } from 'shared/ui/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { NavbarItemsList } from 'widgets/Navbar/model/items';
import { NavbarItem } from '../NavbarItem/NavbarItem';
import { Dropdown } from 'shared/ui/Dropdown';
import { AppLink } from 'shared/ui/AppLink';
import { ProfileRoutePath } from 'shared/config/routeConfig/routeConfig';
import { useLocation } from 'react-router-dom';

interface NavbarProps {
	className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
	const { t } = useTranslation('');
	const [isAuthModal, setIsAuthModal] = useState(false);
	const authData = useSelector(getUserAuthData);
	const dispatch = useDispatch();
	const location = useLocation();
	const [pathname, setPathname] = useState('');
	const isAuth = useSelector(getUserAuthData);

	const ProfilePageLinks = useMemo(
		() => [
			{
				to: ProfileRoutePath.favorite,
				active: pathname === ProfileRoutePath.favorite,
				text: t('Favorites'),
			},
			{
				to: ProfileRoutePath.my_objects,
				active: pathname === ProfileRoutePath.my_objects,
				text: t('My objects'),
			},
			{
				to: ProfileRoutePath.settings,
				active: pathname === ProfileRoutePath.settings,
				text: t('Profile settings'),
			},
		],
		[pathname, t]
	);
	useEffect(() => {
		setPathname(location.pathname);
	}, [pathname, location.pathname]);

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false);
	}, []);
	const onOpenModal = useCallback(() => {
		setIsAuthModal(true);
	}, []);
	const onLogout = useCallback(() => {
		dispatch(userActions.logout());
	}, [dispatch]);

	return (
		<div
			className={classNames(cls.Navbar, {}, [className])}
			data-testid="navbar"
		>
			<div className={cls.Navbar__actions}>
				{NavbarItemsList.map((item) => (
					<NavbarItem item={item} key={item.path} />
				))}
				{isAuth && (
					<Dropdown
						path={pathname}
						label={t('Profile page')}
						buttonActive={location.pathname.startsWith('/profile')}
					>
						<div className={cls.Navbar__links}>
							{ProfilePageLinks.map((item) => (
								<AppLink
									key={item.to}
									to={item.to}
									active={item.active}
								>
									{item.text}
								</AppLink>
							))}
						</div>
					</Dropdown>
				)}

				<ThemeSwitcher className={cls.Navbar__theme} />
				<LangSwitcher />
				{authData ? (
					<Button onClick={onLogout}>{t('Log out')}</Button>
				) : (
					<>
						<Button onClick={onOpenModal}>{t('Sing in')}</Button>
						{isAuthModal && (
							<LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
						)}
					</>
				)}
			</div>
		</div>
	);
});
