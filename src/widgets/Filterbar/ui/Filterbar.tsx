import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Filterbar.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/ui/Button';

interface FilterbarProps {
	className?: string;
}

export const Filterbar = ({ className }: FilterbarProps) => {
	const { t } = useTranslation();
	return (
		<div className={classNames(cls.Filterbar, {}, [className])}>
			<div className={cls.Filterbar__select}>SELECT</div>
			<div className={cls.Filterbar__actions}>
				<Button className={cls.Filterbar__button}>{t('Sale')}</Button>
				<Button className={cls.Filterbar__button}>{t('Rent')}</Button>
			</div>
			<div className={cls.Filterbar__input}>INPUT</div>
		</div>
	);
};
