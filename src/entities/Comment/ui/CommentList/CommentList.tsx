import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CommentList.module.scss';
import { Comment } from 'entities/Comment/model/types/comment';
import { Text } from 'shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { CommentItem } from '../CommentItem/CommentItem';

interface CommentListProps {
	className?: string;
	comments?: Comment[];
	isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
	const { className, isLoading, comments } = props;
	const { t } = useTranslation('apartment');

	return (
		<div className={classNames(cls.CommentList, {}, [className])}>
			{comments?.length ? (
				comments.map((comment) => (
					<CommentItem
						isLoading={isLoading}
						key={comment.id}
						className={cls.CommentList__item}
						comment={comment}
					/>
				))
			) : (
				<Text text={t('No comments found')}></Text>
			)}
		</div>
	);
});
