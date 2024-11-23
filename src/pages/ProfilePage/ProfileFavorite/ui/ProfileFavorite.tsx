import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ProfileFavorite.module.scss';

interface ProfileFavoriteProps {
	className?: string;
}

const ProfileFavorite = ({ className }: ProfileFavoriteProps) => {
	const { t } = useTranslation('profile');
	return (
		<div className={classNames(cls.ProfileFavorite, {}, [className])}>
			<div>{t('Favorite objects')}</div>
		</div>
	);
};

export default ProfileFavorite;
