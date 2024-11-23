import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { CSSProperties, useMemo } from 'react';

interface AvatarProps {
	className?: string;
	src?: string;
	size?: number;
	alt?: string;
}

export const Avatar = (props: AvatarProps) => {
	const { className, src, size, alt } = props;

	const styles = useMemo<CSSProperties>(() => {
		return {
			width: size || 50,
			height: size || 50,
		};
	}, [size]);

	return (
		<div style={styles} className={classNames(cls.Avatar, {}, [className])}>
			<img src={src} alt={alt} />
		</div>
	);
};
