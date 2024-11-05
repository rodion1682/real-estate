import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './LangSwitcher.module.scss';
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button';
import { SvgIcon, SvgIconSizes } from 'shared/ui/SvgIcon/ui/SvgIcon';
import LangIcon from 'shared/assets/lang.svg';

interface LangSwitcherProps {
	className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
	const { t, i18n } = useTranslation();
	const toggleLanguage = () => {
		i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
	};

	return (
		<Button
			className={classNames(cls.LangSwitcher, {}, [className])}
			onClick={toggleLanguage}
			theme={ButtonTheme.SWITCHER}
		>
			<SvgIcon
				children={<LangIcon />}
				size={SvgIconSizes.NAVBAR_LANG_SIZE}
			/>
			<span>{t('Language')}</span>
		</Button>
	);
};
