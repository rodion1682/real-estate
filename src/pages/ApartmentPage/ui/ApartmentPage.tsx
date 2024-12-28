import { Apartament } from 'entities/Apartament';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import cls from './ApartmentPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface ApartmentPageProps {
	className?: string;
}

export const ApartmentPage = memo((props: ApartmentPageProps) => {
	const { className } = props;
	const { t } = useTranslation('apartment');
	const { id } = useParams<{ id: string }>();
	if (!id) {
		return <div> {t('Apartment not found')}</div>;
	}
	return (
		<div className={classNames(cls.ApartmentPage, {}, [className])}>
			<Apartament id={id} />
		</div>
	);
});

export default ApartmentPage;
