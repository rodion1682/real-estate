import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './LoginForm.module.scss';
import { Button } from 'shared/ui/Button/ui/Button';
import { Input } from 'shared/ui/Input';
import { InputTheme, InputType } from 'shared/ui/Input/ui/Input';

interface LoginFormProps {
	className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
	const { t } = useTranslation();
	return (
		<div className={classNames(cls.LoginForm, {}, [className])}>
			<div className={cls.LoginForm__items}>
				<Input
					placeholder={t('Enter username')}
					className={cls.LoginForm__input}
				/>
				<Input
					placeholder={t('Enter password')}
					type={InputType.PASSWORD}
					theme={InputTheme.PASSWORD_INPUT}
					className={cls.LoginForm__input}
				/>
			</div>
			<Button className={cls.LoginForm__button}>{t('Sing in')}</Button>
		</div>
	);
};
