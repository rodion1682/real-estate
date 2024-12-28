import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ApartamentContent.module.scss';
import { SvgIcon } from 'shared/ui/SvgIcon/ui/SvgIcon';
import MapMarkerIcon from 'shared/assets/map-marker.svg';
import DoorIcon from 'shared/assets/door.svg';
import StairsIcon from 'shared/assets/stairs.svg';
import CalendarIcon from 'shared/assets/calendar.svg';
import { Dropdown } from 'shared/ui/Dropdown';
import { Text } from 'shared/ui/Text';
import { Apartament } from 'entities/Apartament/model/types/apartament';

interface ApartamentContentProps {
	className?: string;
	apartament?: Apartament;
}

export const ApartamentContent = memo((props: ApartamentContentProps) => {
	const { apartament } = props;
	const { t } = useTranslation();
	return (
		<>
			<Text
				className={cls.Content__price}
				title={apartament?.price + ' €'}
			/>
			<div
				className={classNames(cls.Content__adress, {}, [cls.Content__item])}
			>
				<SvgIcon>
					<MapMarkerIcon />
				</SvgIcon>
				<Text className={cls.Content__price} text={apartament?.address} />
			</div>
			<div className={cls.Content__items}>
				<div className={cls.Content__item}>
					<Text text={apartament?.size + ' m²'} />
				</div>
				<div className={cls.Content__item}>
					<SvgIcon stroke={true}>
						<DoorIcon />
					</SvgIcon>
					<Text text={apartament?.badroom} />
				</div>
				<div className={cls.Content__item}>
					<SvgIcon>
						<StairsIcon />
					</SvgIcon>
					<Text text={apartament?.floor} />
				</div>
			</div>
			<div className={cls.Content__description}>
				<Dropdown
					positionReletive={true}
					multiple={true}
					multipleLabels={[t('Show description'), t('Hide description')]}
				>
					<Text text={apartament?.description} />
				</Dropdown>
			</div>
			<div className={cls.Content__item}>
				<SvgIcon stroke={true}>
					<CalendarIcon />
				</SvgIcon>

				<Text text={apartament?.date} />
			</div>
		</>
	);
});
