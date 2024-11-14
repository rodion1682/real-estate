import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './LoginForm.module.scss';
import { Input } from 'shared/ui/Input';
import { InputTheme, InputType } from 'shared/ui/Input/ui/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Text, TextTheme } from 'shared/ui/Text';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import {
	DynamicModuleLoader,
	ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

export interface LoginFormProps {
	className?: string;
	onSuccess: () => void;
}

const initialReducers: ReducersList = {
	loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const username = useSelector(getLoginUsername);
	const password = useSelector(getLoginPassword);
	const isLoading = useSelector(getLoginIsLoading);
	const error = useSelector(getLoginError);

	const onChangeUserName = useCallback(
		(value: string) => {
			dispatch(loginActions.setUsername(value));
		},
		[dispatch]
	);
	const onChangePassword = useCallback(
		(value: string) => {
			dispatch(loginActions.setPassword(value));
		},
		[dispatch]
	);
	const onLoginClick = useCallback(async () => {
		const reslut = await dispatch(loginByUsername({ username, password }));
		if (reslut.meta.requestStatus === 'fulfilled') {
			onSuccess();
		}
	}, [onSuccess, dispatch, username, password]);

	return (
		<DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
			<div className={classNames(cls.LoginForm, {}, [className])}>
				<Text
					className={cls.LoginForm__title}
					title={t('Authorization form')}
				/>
				{error && (
					<Text
						className={cls.LoginForm__error}
						theme={TextTheme.ERROR}
						text={t('You entered an incorrect username or password')}
					/>
				)}
				<div className={cls.LoginForm__items}>
					<Input
						placeholder={t('Enter username')}
						className={cls.LoginForm__input}
						onChange={onChangeUserName}
						value={username}
					/>
					<Input
						placeholder={t('Enter password')}
						type={InputType.PASSWORD}
						theme={InputTheme.PASSWORD_INPUT}
						className={cls.LoginForm__input}
						onChange={onChangePassword}
						value={password}
					/>
				</div>
				<Button
					theme={ButtonTheme.SUBMIT}
					onClick={onLoginClick}
					className={cls.LoginForm__button}
					disabled={isLoading}
				>
					{t('Sing in')}
				</Button>
			</div>
		</DynamicModuleLoader>
	);
});

export default LoginForm;
