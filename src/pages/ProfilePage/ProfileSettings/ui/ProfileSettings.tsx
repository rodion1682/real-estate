import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileSettings.module.scss';
import {
	DynamicModuleLoader,
	ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ProfilePageHeader } from 'pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader';
import {
	fetchProfileData,
	getProfileError,
	getProfileIsLoading,
	getProfileReadOnly,
	getProfileValidateErrors,
	profileActions,
	ProfileCard,
	profileReducer,
	ValidateProfileError,
} from 'entities/Profile';
import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getProfileForm } from 'entities/Profile/model/selectors/getProfileForm/getProfileForm';
import { Text, TextTheme } from 'shared/ui/Text';
import { useTranslation } from 'react-i18next';

const reducers: ReducersList = {
	profile: profileReducer,
};

interface ProfileSettingsProps {
	className?: string;
}

const ProfileSettings = memo(({ className }: ProfileSettingsProps) => {
	const { t } = useTranslation('profile');
	const dispatch = useAppDispatch();
	const formData = useSelector(getProfileForm);
	const isLoading = useSelector(getProfileIsLoading);
	const error = useSelector(getProfileError);
	const readonly = useSelector(getProfileReadOnly);
	const validateErrors = useSelector(getProfileValidateErrors);

	const validateErrorTranslates = {
		[ValidateProfileError.SERVER_ERROR]: t('Server error when saving'),
		[ValidateProfileError.INCORECT_USER_DATA]: t(
			'First and last name are required'
		),
		[ValidateProfileError.NO_DATA]: t('Data not provided'),
		[ValidateProfileError.INCORECT_CITY]: t('Incorrect city'),
		[ValidateProfileError.INCORECT_AGE]: t('Incorrect age'),
	};

	useEffect(() => {
		if (__PROJECT__ !== 'storybook') {
			dispatch(fetchProfileData());
		}
	}, [dispatch]);

	const onChangeFirsname = useCallback(
		(value?: string) => {
			dispatch(profileActions.upgradeProfile({ first: value || '' }));
		},
		[dispatch]
	);
	const onChangeSurname = useCallback(
		(value?: string) => {
			dispatch(profileActions.upgradeProfile({ lastname: value || '' }));
		},
		[dispatch]
	);
	const onChangeCity = useCallback(
		(value?: string) => {
			dispatch(profileActions.upgradeProfile({ city: value || '' }));
		},
		[dispatch]
	);
	const onChangeAge = useCallback(
		(value?: string) => {
			if (!value || isNaN(Number(value))) {
				return;
			}
			dispatch(profileActions.upgradeProfile({ age: Number(value || 0) }));
		},
		[dispatch]
	);
	const onChangeAvatar = useCallback(
		(value?: string) => {
			if (!value || isNaN(Number(value))) {
				return;
			}
			dispatch(profileActions.upgradeProfile({ avatar: value || '' }));
		},
		[dispatch]
	);

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<div className={classNames(cls.ProfileSettings, {}, [className])}>
				<div className={cls.ProfileSettings__content}>
					<ProfilePageHeader />
					{validateErrors?.length &&
						validateErrors.map((error) => (
							<Text
								key={error}
								theme={TextTheme.ERROR}
								text={validateErrorTranslates[error]}
							/>
						))}
					<ProfileCard
						data={formData}
						isLoading={isLoading}
						error={error}
						readonly={readonly}
						onChangeFirsname={onChangeFirsname}
						onChangeSurname={onChangeSurname}
						onChangeCity={onChangeCity}
						onChangeAge={onChangeAge}
						onChangeAvatar={onChangeAvatar}
					/>
				</div>
			</div>
		</DynamicModuleLoader>
	);
});

export default ProfileSettings;
