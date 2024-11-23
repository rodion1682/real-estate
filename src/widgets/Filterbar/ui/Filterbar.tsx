import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Filterbar.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { memo, useState } from 'react';
import { InputTheme } from 'shared/ui/Input/ui/Input';
import { Dropdown } from 'shared/ui/Dropdown';

interface FilterbarProps {
	className?: string;
}

export const Filterbar = memo(({ className }: FilterbarProps) => {
	const { t } = useTranslation();
	const [inputValue, setInputValue] = useState('');
	const onChange = (val: string) => {
		setInputValue(val);
	};
	return (
		<div
			className={classNames(cls.Filterbar, {}, [className])}
			data-testid="filterbar"
		>
			<div className={cls.Filterbar__select}>
				<Dropdown label={t('Price')}>
					<div className={cls.Filterbar__dropdown}>
						<Input theme={InputTheme.EURO} placeholder={t('From')} />
						<span>-</span>
						<Input theme={InputTheme.EURO} placeholder={t('To')} />
					</div>
				</Dropdown>
			</div>
			<div className={cls.Filterbar__actions}>
				<Button className={cls.Filterbar__button}>{t('Sale')}</Button>
				<Button className={cls.Filterbar__button}>{t('Rent')}</Button>
			</div>
			<div className={cls.Filterbar__input}>
				<Input
					value={inputValue}
					onChange={onChange}
					placeholder={t('Search by Address')}
					theme={InputTheme.SEARCH_INPUT}
				/>
			</div>
		</div>
	);
});
