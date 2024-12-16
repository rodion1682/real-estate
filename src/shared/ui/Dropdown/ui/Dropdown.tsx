import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Dropdown.module.scss';
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { _slideToggle, _slideUp } from 'shared/lib/slideToggle/slideToggle';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useClickOutside } from 'shared/lib/useClickOutside/useClickOutside';

interface DropdownProps {
	className?: string;
	children?: ReactNode;
	label?: string;
	buttonActive?: boolean;
	path?: string;
}

export const Dropdown = (props: DropdownProps) => {
	const { className, children, label, buttonActive, path } = props;
	const [isOpen, setIsOpen] = useState(false);
	const dropdownList = useRef<HTMLDivElement>(null);
	const dropdownRef = useRef<HTMLDivElement>(null);
	const buttonRef = useRef<HTMLButtonElement>(null);
	const lastExecutionRef = useRef(0);

	const onCloseDrowdown = () => {
		_slideUp(dropdownList.current!);
		setIsOpen(false);
	};

	useEffect(() => {
		onCloseDrowdown();
	}, [path]);

	const toggleDropdown = useCallback(() => {
		const now = Date.now();

		if (now - lastExecutionRef.current < 500) {
			return;
		}

		lastExecutionRef.current = now;
		_slideToggle(dropdownList.current!);
		setIsOpen((prev) => !prev);
	}, []);

	useClickOutside({
		target: dropdownRef.current!,
		isOpen: isOpen,
		onClose: onCloseDrowdown,
		button: buttonRef.current!,
	});

	return (
		<div
			ref={dropdownRef}
			className={classNames(cls.Dropdown, {}, [className])}
		>
			<Button
				onClick={toggleDropdown}
				open={isOpen}
				theme={ButtonTheme.DROPDOWN}
				active={buttonActive}
				ref={buttonRef}
			>
				<span className={cls.Dropdown__label}>{label}</span>
			</Button>
			<div
				className={classNames(cls.Dropdown__items, {}, [className])}
				ref={dropdownList}
				hidden
			>
				{children}
			</div>
		</div>
	);
};
