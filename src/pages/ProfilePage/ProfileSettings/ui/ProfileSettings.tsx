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
	profileActions,
	ProfileCard,
	profileReducer,
} from 'entities/Profile';
import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getProfileForm } from 'entities/Profile/model/selectors/getProfileForm/getProfileForm';

const reducers: ReducersList = {
	profile: profileReducer,
};

interface ProfileSettingsProps {
	className?: string;
}

const ProfileSettings = memo(({ className }: ProfileSettingsProps) => {
	const dispatch = useAppDispatch();
	const formData = useSelector(getProfileForm);
	const isLoading = useSelector(getProfileIsLoading);
	const error = useSelector(getProfileError);
	const readonly = useSelector(getProfileReadOnly);

	useEffect(() => {
		dispatch(fetchProfileData());
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
