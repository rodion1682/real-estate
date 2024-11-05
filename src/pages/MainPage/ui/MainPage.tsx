import { useTranslation } from 'react-i18next';
import { Filterbar } from 'widgets/Filterbar/ui/Filterbar';

const MainPage = () => {
	const { t } = useTranslation('main');
	return (
		<div>
			<Filterbar />
			<div>{t('Main page')}</div>;
		</div>
	);
};

export default MainPage;
