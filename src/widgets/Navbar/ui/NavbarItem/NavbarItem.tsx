import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './NavbarItem.module.scss';
import { AppLink } from 'shared/ui/AppLink';
import { NavbarItemType } from 'widgets/Navbar/model/items';
import { SvgIcon } from 'shared/ui/SvgIcon/ui/SvgIcon';
import { memo } from 'react';

interface NavbarItemProps {
	className?: string;
	item?: NavbarItemType;
}

export const NavbarItem = memo(({ className, item }: NavbarItemProps) => {
	const { t } = useTranslation();
	return (
		item && (
			<AppLink
				to={item.path}
				className={classNames(cls.NavbarItem, {}, [className])}
			>
				{item.Icon && <SvgIcon children={<item.Icon />} />}
				<span className={cls.link}>{t(item.text)}</span>
			</AppLink>
		)
	);
});
