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
import { NavbarDropdown } from '../NavbarDropdown/NavbarDropdown';

interface NavbarProps {
	className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
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

	return (
		<div
			className={classNames(cls.Navbar, {}, [className])}
			data-testid="navbar"
		>
			<div className={cls.Navbar__actions}>
				{NavbarItemsList.map((item) => (
					<NavbarItem item={item} key={item.path} />
				))}
				<NavbarDropdown />
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
