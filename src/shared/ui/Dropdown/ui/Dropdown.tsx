import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Dropdown.module.scss';
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { _slideToggle, _slideUp } from 'shared/lib/slideToggle/slideToggle';
import { Button, ButtonTheme } from 'shared/ui/Button';

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
	const dropdownList = useRef(null);
	const dropdownRef = useRef<HTMLDivElement>(null);

	const onCloseDrowdown = () => {
		_slideUp(dropdownList.current!);
		setIsOpen(false);
	};

	useEffect(() => {
		onCloseDrowdown();
	}, [path]);

	const toggleDropdown = useCallback(() => {
		_slideToggle(dropdownList.current!);
		setIsOpen((prev) => !prev);
	}, []);

	const clickOutside = useCallback(
		(e: MouseEvent) => {
			if (
				isOpen &&
				dropdownRef.current &&
				!dropdownRef.current.contains(e.target as Node)
			) {
				onCloseDrowdown();
			}
		},
		[isOpen]
	);

	useEffect(() => {
		if (isOpen) {
			setTimeout(() => {
				window.addEventListener('click', clickOutside);
			}, 500);
		}

		return () => {
			window.removeEventListener('click', clickOutside);
		};
	}, [isOpen, clickOutside]);

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
			>
				{label}
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
