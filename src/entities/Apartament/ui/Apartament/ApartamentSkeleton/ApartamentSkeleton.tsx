import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ApartamentSkeleton.module.scss';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

interface ApartamentSkeletonProps {
	className?: string;
}

export const ApartamentSkeleton = memo(
	({ className }: ApartamentSkeletonProps) => {
		const { t } = useTranslation();
		return (
			<div className={classNames(cls.Skeleton, {}, [className])}>
				<Skeleton className={cls.Skeleton__slider} width="70%" />
				<div className={cls.Skeleton__content}>
					<Skeleton
						className={cls.Skeleton__price}
						width="40%"
						height={32}
					/>
					<Skeleton
						className={cls.Skeleton__adress}
						width="70%"
						height={26}
					/>
					<div className={cls.Skeleton__items}>
						<Skeleton width="15%" height={24} />
						<Skeleton width="15%" height={24} />
						<Skeleton width="15%" height={24} />
					</div>
					<Skeleton
						className={cls.Skeleton__description}
						width="70%"
						height={42}
					/>
					<Skeleton width="25%" height={24} />
				</div>
			</div>
		);
	}
);
