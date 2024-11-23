import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ProfilePageHeader.module.scss';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Text } from 'shared/ui/Text';
import { useSelector } from 'react-redux';
import {
	getProfileReadOnly,
	profileActions,
	updateProfileData,
} from 'entities/Profile';
import { memo, useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

interface ProfilePageHeaderProps {
	className?: string;
}

export const ProfilePageHeader = memo(
	({ className }: ProfilePageHeaderProps) => {
		const { t } = useTranslation('profile');
		const readonly = useSelector(getProfileReadOnly);
		const dispatch = useAppDispatch();

		const onEdit = useCallback(() => {
			dispatch(profileActions.setReadonly(false));
		}, [dispatch]);

		const onCancelEdit = useCallback(() => {
			dispatch(profileActions.cancelEdit());
		}, [dispatch]);

		const onSave = useCallback(() => {
			dispatch(updateProfileData());
		}, [dispatch]);

		return (
			<div className={classNames(cls.ProfilePageHeader, {}, [className])}>
				<Text title={t('Profile')} />
				{readonly ? (
					<Button onClick={onEdit}>{t('Edit profile')}</Button>
				) : (
					<div className={cls.ProfilePageHeader__actions}>
						<Button onClick={onSave} theme={ButtonTheme.SUBMIT}>
							{t('Save changes')}
						</Button>
						<Button onClick={onCancelEdit} theme={ButtonTheme.CANCEL}>
							{t('Cancel editing')}
						</Button>
					</div>
				)}
			</div>
		);
	}
);
