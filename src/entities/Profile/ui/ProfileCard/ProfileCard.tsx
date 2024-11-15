import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ProfileCard.module.scss';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { Text } from 'shared/ui/Text';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';

interface ProfileCardProps {
	className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
	const { t } = useTranslation('profile');
	const data = useSelector(getProfileData);
	const isLoading = useSelector(getProfileIsLoading);
	const error = useSelector(getProfileError);
	return (
		<div className={classNames(cls.ProfileCard, {}, [className])}>
			<div className={cls.ProfileCard__top}>
				<Text title={t('Profile')} />
				<Button theme={ButtonTheme.SUBMIT}>{t('Edit profile')}</Button>
			</div>
			<div className={cls.ProfileCard__data}>
				<Input
					className={cls.ProfileCard__input}
					value={data?.first}
					placeholder={t('Your name')}
				/>
				<Input
					className={cls.ProfileCard__input}
					value={data?.lastname}
					placeholder={t('Your surname')}
				/>
			</div>
		</div>
	);
};
