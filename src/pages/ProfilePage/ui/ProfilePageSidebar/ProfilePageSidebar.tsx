import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ProfilePageSidebar.module.scss';
import { AppLink } from 'shared/ui/AppLink';
import { AppLinkTheme } from 'shared/ui/AppLink/ui/AppLink';
import { ProfileRoutePath } from 'shared/config/routeConfig/routeConfig';
import { useLocation } from 'react-router-dom';
import { memo } from 'react';

interface ProfilePageSidebarProps {
	className?: string;
}

export const ProfilePageSidebar = memo(
	({ className }: ProfilePageSidebarProps) => {
		const { t } = useTranslation();
		const location = useLocation();
		return (
			<div className={classNames(cls.ProfilePageSidebar, {}, [className])}>
				<AppLink
					theme={AppLinkTheme.PROFILE}
					to={ProfileRoutePath.favorite}
					active={location.pathname === ProfileRoutePath.favorite}
				>
					{t('Favorites')}
				</AppLink>
				<AppLink
					theme={AppLinkTheme.PROFILE}
					to={ProfileRoutePath.my_objects}
					active={location.pathname === ProfileRoutePath.my_objects}
				>
					{t('My objects')}
				</AppLink>
				<AppLink
					theme={AppLinkTheme.PROFILE}
					to={ProfileRoutePath.settings}
					active={location.pathname === ProfileRoutePath.settings}
				>
					{t('Profile settings')}
				</AppLink>
			</div>
		);
	}
);
