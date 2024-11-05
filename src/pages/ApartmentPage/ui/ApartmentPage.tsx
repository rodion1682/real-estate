import { useTranslation } from 'react-i18next';
const ApartmentPage = () => {
	const { t } = useTranslation('apartment');
	return <div>{t('Apartment page')}</div>;
};

export default ApartmentPage;
