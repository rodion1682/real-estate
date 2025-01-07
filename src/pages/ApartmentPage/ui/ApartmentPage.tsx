import { Apartament } from 'entities/Apartament';
import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import cls from './ApartmentPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text';
import { CommentList } from 'entities/Comment';
import {
	DynamicModuleLoader,
	ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
	apartamentCommentsReducer,
	getApartamentComments,
} from '../model/slice/apartamentCommentSlice';
import { useSelector } from 'react-redux';
import { getApartamentCommentsIsLoading } from '../model/selectors/comments';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchCommentByApartamentId } from '../model/services/fetchCommentByApartamentId/fetchCommentByApartamentId';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';

interface ApartmentPageProps {
	className?: string;
}

const reducers: ReducersList = {
	apartamentComments: apartamentCommentsReducer,
};

export const ApartmentPage = memo((props: ApartmentPageProps) => {
	const { className } = props;
	const { t } = useTranslation('apartment');
	const dispatch = useAppDispatch();
	const { id } = useParams<{ id: string }>();
	const comments = useSelector(getApartamentComments.selectAll);
	const commentsIsLoading = useSelector(getApartamentCommentsIsLoading);

	useInitialEffect(() => {
		dispatch(fetchCommentByApartamentId(id));
	});

	if (!id) {
		return <div> {t('Apartment not found')}</div>;
	}

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<div className={classNames(cls.ApartmentPage, {}, [className])}>
				<Apartament className={cls.ApartmentPage__apartament} id={id} />
				<Text className={cls.ApartmentPage__title} title={t('Comment')} />
				<CommentList isLoading={commentsIsLoading} comments={comments} />
			</div>
		</DynamicModuleLoader>
	);
});

export default ApartmentPage;
