import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Select.module.scss';
import { memo, useCallback, useMemo, useRef, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { _slideToggle, _slideUp } from 'shared/lib/slideToggle/slideToggle';
import { useClickOutside } from 'shared/lib/useClickOutside/useClickOutside';

interface SelectProps {
	className?: string;
	options?: string[];
	placeholder?: string;
}

export const Select = memo((props: SelectProps) => {
	const { t } = useTranslation();
	const { className, options, placeholder = t('Sort by') } = props;

	const [selected, setSelected] = useState<string>('');
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const dropdownRef = useRef<HTMLDivElement>(null);
	const dropdownList = useRef<HTMLDivElement>(null);

	const filtredItems = useMemo(() => {
		if (options) {
			return options.filter((item) => item !== selected);
		}
	}, [selected, options]);

	const toggleDropdown = useCallback(() => {
		_slideToggle(dropdownList.current!);
		setIsOpen((prev) => !prev);
	}, []);
	const onCloseDrowdown = useCallback(() => {
		_slideUp(dropdownList.current!);
		setIsOpen(false);
	}, []);

	useClickOutside({
		target: dropdownRef.current!,
		isOpen: isOpen,
		onClose: onCloseDrowdown,
	});

	const handleSelected = useCallback((value: string) => {
		setSelected(value);
	}, []);

	return (
		<div
			ref={dropdownRef}
			className={classNames(cls.Select, {}, [className])}
		>
			<Button
				className={cls.Select__label}
				onClick={toggleDropdown}
				open={isOpen}
				theme={ButtonTheme.DROPDOWN}
			>
				<span>{selected === '' ? placeholder : selected}</span>
			</Button>
			<div ref={dropdownList} hidden className={cls.Select__dropdown}>
				{filtredItems?.map((item) => (
					<Button
						className={cls.Select__item}
						key={item}
						onClick={() => handleSelected(item)}
						theme={ButtonTheme.SELECT}
					>
						{item}
					</Button>
				))}
			</div>
		</div>
	);
});
