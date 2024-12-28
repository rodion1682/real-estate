import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Apartament.module.scss';
import { memo, useEffect } from 'react';
import {
	DynamicModuleLoader,
	ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { apartamentReducer } from 'entities/Apartament/model/slice/apartamentSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchApartamentById } from 'entities/Apartament/model/services/fetchApartamentById/fetchApartamentById';
import { useSelector } from 'react-redux';
import {
	getApartamentData,
	getApartamentError,
	getApartamentIsLoading,
} from '../../../model/selectors/getApartament';
import { Text } from 'shared/ui/Text';
import { TextAlign, TextTheme } from 'shared/ui/Text/ui/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Slider } from 'shared/ui/Slider';
import { ApartamentContent } from '../ApartamentContent/ApartamentContent';
import { ApartamentSkeleton } from '../ApartamentSkeleton/ApartamentSkeleton';

interface ApartamentProps {
	className?: string;
	id: string;
}

const reducers: ReducersList = {
	apartament: apartamentReducer,
};

export const Apartament = memo((props: ApartamentProps) => {
	const { className, id } = props;
	const { t } = useTranslation('apartment');
	const dispatch = useAppDispatch();
	const isLoading = useSelector(getApartamentIsLoading);
	const apartament = useSelector(getApartamentData);
	const error = useSelector(getApartamentError);

	useEffect(() => {
		if (__PROJECT__ !== 'storybook') {
			dispatch(fetchApartamentById(id));
		}
	}, [dispatch, id]);

	let content;

	if (isLoading) {
		content = <ApartamentSkeleton />;
	} else if (error) {
		content = (
			<Text
				align={TextAlign.CENTER}
				theme={TextTheme.ERROR}
				title={t('An error occurred while loading the apartments')}
			/>
		);
	} else {
		content = (
			<>
				<div className={cls.Apartament__slider}>
					<Slider slides={apartament?.images} />
				</div>
				<div className={cls.Apartament__content}>
					<ApartamentContent apartament={apartament} />
				</div>
			</>
		);
	}

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
			<div className={classNames(cls.Apartament, {}, [className])}>
				{content}
			</div>
		</DynamicModuleLoader>
	);
});
