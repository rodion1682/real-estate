import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './CommentItem.module.scss';
import { Comment } from 'entities/Comment/model/types/comment';
import { Avatar } from 'shared/ui/Avatar';
import { Text } from 'shared/ui/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

interface CommentItemProps {
	className?: string;
	comment?: Comment;
	isLoading?: boolean;
}

export const CommentItem = memo((props: CommentItemProps) => {
	const { className, comment, isLoading } = props;
	const { t } = useTranslation();

	if (isLoading) {
		return (
			<div className={classNames(cls.CommentItem, {}, [className])}>
				<div className={cls.CommentItem__header}>
					<Skeleton width="30px" height="30px" border="50%" />
					<Skeleton width="100px" height={24} />
				</div>
				<Skeleton width="100%" height={50} />
			</div>
		);
	}
	return (
		<div className={classNames(cls.CommentItem, {}, [className])}>
			<div className={cls.CommentItem__header}>
				{comment?.user.avatar ? (
					<Avatar size={30} src={comment.user.avatar} />
				) : null}

				<Text title={comment?.user.username} />
			</div>
			<Text text={comment?.text} />
		</div>
	);
});
