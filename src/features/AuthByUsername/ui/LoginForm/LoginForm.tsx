import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './LoginForm.module.scss';
import { Input } from 'shared/ui/Input';
import { InputTheme, InputType } from 'shared/ui/Input/ui/Input';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { memo, useCallback, useEffect } from 'react';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { AppDispatch } from 'app/providers/StoreProvider/config/store';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Text, TextTheme } from 'shared/ui/Text';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import {
	DynamicModuleLoader,
	ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

export interface LoginFormProps {
	className?: string;
}

const initialReducers: ReducersList = {
	loginForm: loginReducer,
};

const LoginForm = memo(({ className }: LoginFormProps) => {
	const { t } = useTranslation();
	const dispatch = useDispatch<AppDispatch>();
	const store = useStore() as ReduxStoreWithManager;
	const username = useSelector(getLoginUsername);
	const password = useSelector(getLoginPassword);
	const isLoading = useSelector(getLoginIsLoading);
	const error = useSelector(getLoginError);

	useEffect(() => {
		store.reducerManager.add('loginForm', loginReducer);
		dispatch({ type: '@INIT loginForm reducer' });
		return () => {
			store.reducerManager.remove('loginForm');
			dispatch({ type: '@DESTROY loginForm reducer' });
		};
		//eslint-disable-next-line
	}, []);

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
