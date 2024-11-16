import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { Button } from 'shared/ui/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { NavbarItemsList } from 'widgets/Navbar/model/items';
import { NavbarItem } from '../NavbarItem/NavbarItem';
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
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const location = useLocation();

	const toggleDropdown = () => {
		setIsDropdownOpen((prev) => !prev);
	};

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
				<div className={cls.Navbar__wrapper}>
					<Button
						className={classNames(
							'',
							{ [cls.Navbar__button_active]: isDropdownOpen },
							[]
						)}
						onClick={toggleDropdown}
					>
						{t('Profile page')}
					</Button>
					<div
						className={classNames(
							cls.Navbar__dropdown,
							{ [cls.Navbar__dropdown_open]: isDropdownOpen },
							[]
						)}
					>
						<AppLink
							className={cls.Navbar__link}
							to={ProfileRoutePath.favorite}
							active={location.pathname === ProfileRoutePath.favorite}
						>
							{t('Favorite')}
						</AppLink>
						<AppLink
							className={cls.Navbar__link}
							to={ProfileRoutePath.my_objects}
							active={location.pathname === ProfileRoutePath.my_objects}
						>
							{t('My objects')}
						</AppLink>
						<AppLink
							className={cls.Navbar__link}
							to={ProfileRoutePath.settings}
							active={location.pathname === ProfileRoutePath.settings}
						>
							{t('Profile settings')}
						</AppLink>
					</div>
				</div>
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
