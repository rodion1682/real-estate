import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './NavbarDropdown.module.scss';
import { Button } from 'shared/ui/Button';
import { AppLink } from 'shared/ui/AppLink';
import { ProfileRoutePath } from 'shared/config/routeConfig/routeConfig';
import { useLocation } from 'react-router-dom';
import { memo, useCallback, useEffect, useRef, useState } from 'react';

interface NavbarDropdownProps {
	className?: string;
}

export const NavbarDropdown = memo(({ className }: NavbarDropdownProps) => {
	const { t } = useTranslation();
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const location = useLocation();
	const dropdownRef = useRef<HTMLDivElement>(null);

	const clickOutside = useCallback(
		(e: MouseEvent) => {
			if (
				isDropdownOpen &&
				dropdownRef.current &&
				!dropdownRef.current.contains(e.target as Node)
			) {
				setIsDropdownOpen(false);
			}
		},
		[isDropdownOpen]
	);

	useEffect(() => {
		if (isDropdownOpen) {
			window.addEventListener('click', clickOutside);
		}

		return () => {
			window.removeEventListener('click', clickOutside);
		};
	}, [isDropdownOpen, clickOutside]);

	const toggleDropdown = () => {
		setIsDropdownOpen((prev) => !prev);
	};
	return (
		<div
			className={classNames(cls.NavbarDropdown, {}, [className])}
			ref={dropdownRef}
		>
			<Button
				borderActive={location.pathname.startsWith('/profile')}
				active={isDropdownOpen}
				onClick={toggleDropdown}
			>
				{t('Profile page')}
			</Button>
			<div
				className={classNames(
					cls.NavbarDropdown__dropdown,
					{ [cls.NavbarDropdown__dropdown_open]: isDropdownOpen },
					[]
				)}
			>
				<AppLink
					onClick={toggleDropdown}
					className={cls.NavbarDropdown__link}
					to={ProfileRoutePath.favorite}
					active={location.pathname === ProfileRoutePath.favorite}
				>
					{t('Favorite')}
				</AppLink>
				<AppLink
					onClick={toggleDropdown}
					className={cls.NavbarDropdown__link}
					to={ProfileRoutePath.my_objects}
					active={location.pathname === ProfileRoutePath.my_objects}
				>
					{t('My objects')}
				</AppLink>
				<AppLink
					onClick={toggleDropdown}
					className={cls.NavbarDropdown__link}
					to={ProfileRoutePath.settings}
					active={location.pathname === ProfileRoutePath.settings}
				>
					{t('Profile settings')}
				</AppLink>
			</div>
		</div>
	);
});
