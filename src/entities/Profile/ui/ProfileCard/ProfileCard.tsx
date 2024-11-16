import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ProfileCard.module.scss';
import { Text, TextTheme } from 'shared/ui/Text';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { ProfileType } from '../../model/types/profile';
import { Loader } from 'shared/ui/Loader';
import { TextAlign } from 'shared/ui/Text/ui/Text';

interface ProfileCardProps {
	className?: string;
	data?: ProfileType;
	error?: string;
	isLoading?: boolean;
	readonly?: boolean;
	onChangeFirsname?: (value: string) => void;
	onChangeSurname?: (value: string) => void;
	onChangeCity?: (value: string) => void;
	onChangeAge?: (value: string) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
	const {
		className,
		data,
		error,
		isLoading,
		readonly,
		onChangeFirsname,
		onChangeSurname,
		onChangeCity,
		onChangeAge,
	} = props;
	const { t } = useTranslation('profile');

	const formFields = [
		{
			label: t('Your name'),
			value: data?.first,
			placeholder: t('Your name'),
			onChange: onChangeFirsname,
		},
		{
			label: t('Your surname'),
			value: data?.lastname,
			placeholder: t('Your surname'),
			onChange: onChangeSurname,
		},
		{
			label: t('Your city'),
			value: data?.city,
			placeholder: t('Your city'),
			onChange: onChangeCity,
		},
		{
			label: t('Your age'),
			value: data?.age,
			placeholder: t('Your age'),
			onChange: onChangeAge,
		},
	];

	if (isLoading) {
		return (
			<div
				className={classNames(cls.ProfileCard, {}, [
					className,
					cls.ProfileCard__loading,
				])}
			>
				<Loader />
			</div>
		);
	}

	if (error) {
		return (
			<div
				className={classNames(cls.ProfileCard, {}, [
					className,
					cls.ProfileCard__error,
				])}
			>
				<Text
					align={TextAlign.CENTER}
					theme={TextTheme.ERROR}
					title={t('An error occurred while loading the user')}
				/>
				<Text
					align={TextAlign.CENTER}
					theme={TextTheme.ERROR}
					text={t('Try refreshing the page')}
				/>
			</div>
		);
	}

	return (
		<div className={classNames(cls.ProfileCard, {}, [className])}>
			<div className={cls.ProfileCard__data}>
				{formFields.map((field) => (
					<div key={field.label} className={cls.ProfileCard__inner}>
						<Text className={cls.ProfileCard__label} text={field.label} />
						<Input
							readonly={readonly}
							className={cls.ProfileCard__input}
							value={field.value}
							placeholder={field.label}
							onChange={field.onChange}
						/>
					</div>
				))}
			</div>
		</div>
	);
};
