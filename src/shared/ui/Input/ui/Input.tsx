import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';
import {
	InputHTMLAttributes,
	memo,
	ChangeEvent,
	useState,
	useEffect,
} from 'react';
import { useTranslation } from 'react-i18next';
import { SvgIcon } from 'shared/ui/SvgIcon/ui/SvgIcon';
import SearchIcon from 'shared/assets/search.svg';
import EyeIcon from 'shared/assets/eye.svg';
import EyeSlashIcon from 'shared/assets/eye-slash.svg';
import { Button, ButtonTheme } from 'shared/ui/Button';

export enum InputTheme {
	MAIN_INPUT = 'main_input',
	PASSWORD_INPUT = 'password_input',
	SEARCH_INPUT = 'search_input',
}

export enum InputType {
	TEXT = 'text',
	PASSWORD = 'password',
}

type HTMLInputProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
	className?: string;
	value?: string;
	onChange?: (value: string) => void;
	type?: InputType;
	placeholder?: string;
	theme?: InputTheme;
}

export const Input = memo((props: InputProps) => {
	const { t } = useTranslation();
	const {
		className,
		value,
		onChange,
		placeholder = t('Enter text'),
		type = InputType.TEXT,
		theme = InputTheme.MAIN_INPUT,
		...otherProps
	} = props;
	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value);
	};
	const [isPassword, setIsPassword] = useState(false);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		if (type === InputType.PASSWORD) {
			setIsPassword(true);
		}
	}, [type]);

	const passwordVisibleHandler = () => {
		setIsVisible((prev) => !prev);
	};

	return (
		<div className={classNames(cls.Input, {}, [className, cls[theme]])}>
			{theme === InputTheme.SEARCH_INPUT && (
				<SvgIcon className={cls.Input__icon} children={<SearchIcon />} />
			)}
			<input
				type={
					type === InputType.PASSWORD
						? isVisible === true
							? InputType.TEXT
							: InputType.PASSWORD
						: type
				}
				value={value}
				onChange={onChangeHandler}
				placeholder={placeholder}
				{...otherProps}
			/>
			{isPassword && (
				<Button
					onClick={passwordVisibleHandler}
					theme={ButtonTheme.PASSWORD}
					className={cls.Input__password}
				>
					<SvgIcon children={isVisible ? <EyeIcon /> : <EyeSlashIcon />} />
				</Button>
			)}
		</div>
	);
});
