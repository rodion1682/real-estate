import { memo } from 'react';
import { useTranslation } from 'react-i18next';
const ApartmentPage = memo(() => {
	const { t } = useTranslation('apartment');
	return <div>{t('Apartment page')}</div>;
});

export default ApartmentPage;
