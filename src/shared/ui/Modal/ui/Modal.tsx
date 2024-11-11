import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Modal.module.scss';
import { FC, ReactNode, useCallback, useEffect } from 'react';
import { Portal } from 'shared/ui/Portal';
import { useTheme } from 'app/providers/ThemeProvider';

interface ModalProps {
	className?: string;
	isOpen?: boolean;
	onClose?: (isOpen: boolean) => void;
	children?: ReactNode;
}

export const Modal: FC<ModalProps> = (props) => {
	const { className, isOpen, onClose, children } = props;
	const { theme } = useTheme();

	const closeHandler = useCallback(() => {
		onClose(false);
	}, [onClose]);

	const onContentClick = (e: React.MouseEvent) => {
		e.stopPropagation();
	};

	const onKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				closeHandler();
			}
		},
		[closeHandler]
	);

	useEffect(() => {
		if (isOpen) {
			window.addEventListener('keydown', onKeyDown);
		}
		return () => {
			window.removeEventListener('keydown', onKeyDown);
		};
	}, [isOpen, onKeyDown]);

	return (
		<Portal>
			<div
				className={classNames(cls.Modal, { [cls.Modal__open]: isOpen }, [
					className,
				])}
				onClick={closeHandler}
			>
				<div className={cls.Modal__content} onClick={onContentClick}>
					{children}
				</div>
			</div>
		</Portal>
	);
};
