import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './LoginForm.module.scss';
import { Input } from 'shared/ui/Input';
import { InputTheme, InputType } from 'shared/ui/Input/ui/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { AppDispatch } from 'app/providers/StoreProvider/config/store';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Text, TextTheme } from 'shared/ui/Text';

interface LoginFormProps {
	className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
	const { t } = useTranslation();
	const dispatch = useDispatch<AppDispatch>();
	const { username, password, isLoading, error } = useSelector(getLoginState);

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
	const onLoginClick = useCallback(() => {
		dispatch(loginByUsername({ username, password }));
	}, [dispatch, username, password]);

	return (
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
	);
});
