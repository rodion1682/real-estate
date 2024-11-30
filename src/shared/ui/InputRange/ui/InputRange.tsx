import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './InputRange.module.scss';
import { Input, InputTheme } from 'shared/ui/Input/ui/Input';
import {
	ChangeEvent,
	memo,
	useCallback,
	useEffect,
	useMemo,
	useState,
} from 'react';

interface InputRangeProps {
	className?: string;
	theme?: InputTheme;
	onChange?: (from: number, to: number) => void;
	from?: number;
	to?: number;
}

export const InputRange = memo((props: InputRangeProps) => {
	const { className, theme, from = 0, to = 0, onChange } = props;
	const { t } = useTranslation();
	const [fromValue, setFromValue] = useState<number>(from);
	const [toValue, setToValue] = useState<number>(to);

	const fromValueChange = useCallback((e: string) => {
		const parsedValue = Number(e);

		if (!isNaN(parsedValue)) {
			setFromValue(parsedValue);
		}
	}, []);

	const toValueChange = useCallback((e: string) => {
		const parsedValue = Number(e);

		if (!isNaN(parsedValue)) {
			setToValue(parsedValue);
		}
	}, []);

	useEffect(() => {
		if (onChange) {
			onChange(fromValue, toValue);
		}
	}, [fromValue, toValue, onChange]);

	return (
		<div className={classNames(cls.InputRange, {}, [className])}>
			<Input
				value={fromValue}
				theme={theme}
				placeholder={t('From')}
				onChange={(e) => fromValueChange(e)}
			/>
			<span>-</span>
			<Input
				value={toValue}
				onChange={(e) => toValueChange(e)}
				theme={theme}
				placeholder={t('To')}
			/>
		</div>
	);
});
