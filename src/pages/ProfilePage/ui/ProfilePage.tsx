import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfilePage.module.scss';
import { memo, Suspense } from 'react';

import { Outlet } from 'react-router-dom';
import { ProfilePageSidebar } from './ProfilePageSidebar/ProfilePageSidebar';
import { PageLoader } from 'widgets/PageLoader';

interface ProfilePageProps {
	className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
	return (
		<div className={classNames(cls.ProfilePage, {}, [className])}>
			<ProfilePageSidebar className={cls.ProfilePage__sidebar} />
			<div className={cls.ProfilePage__content}>
				<Suspense
					fallback={<PageLoader className={cls.ProfilePage__loader} />}
				>
					<Outlet />
				</Suspense>
			</div>
		</div>
	);
});

export default ProfilePage;
