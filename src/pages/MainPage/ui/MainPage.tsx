import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './MainPage.module.scss';
import { Filterbar } from 'widgets/Filterbar';
import { memo } from 'react';

interface MainPageProps {
	className?: string;
}

const MainPage = memo(({ className }: MainPageProps) => {
	const { t } = useTranslation('main');
	return (
		<div className={classNames(cls.MainPage, {}, [className])}>
			<Filterbar />
			<div>{t('Main page')}</div>
		</div>
	);
});

export default MainPage;
