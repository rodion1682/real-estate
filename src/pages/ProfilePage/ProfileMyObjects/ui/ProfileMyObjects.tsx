import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ProfileMyObjects.module.scss';

interface ProfileMyObjectsProps {
	className?: string;
}

const ProfileMyObjects = ({ className }: ProfileMyObjectsProps) => {
	const { t } = useTranslation('profile');
	return (
		<div className={classNames(cls.ProfileMyObjects, {}, [className])}>
			<div>{t('My objects')}</div>
		</div>
	);
};

export default ProfileMyObjects;
