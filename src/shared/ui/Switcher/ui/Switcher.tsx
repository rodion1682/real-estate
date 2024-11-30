import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Switcher.module.scss';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { memo, useCallback, useEffect, useState } from 'react';

interface SwitcherProps {
	className?: string;
	firstValue?: string;
	secondValue?: string;
	onChange?: (first: boolean, second: boolean) => void;
	dataFirstValue?: boolean;
}

export const Switcher = memo(
	({
		className,
		firstValue,
		secondValue,
		onChange,
		dataFirstValue,
	}: SwitcherProps) => {
		const [active, setActive] = useState<number>(dataFirstValue ? 0 : 1);

		const toggleActive = useCallback(() => {
			setActive((prev) => (prev === 0 ? 1 : 0));
		}, []);

		useEffect(() => {
			if (onChange) {
				onChange(active === 0, active === 1);
			}
		}, [active, onChange]);

		return (
			<div className={classNames(cls.Switcher, {}, [className])}>
				{[firstValue, secondValue].map((value, index) => (
					<Button
						key={index}
						className={classNames(
							index === 0 ? cls.Switcher__first : cls.Switcher__second,
							{ [cls.Switcher_active]: active === index },
							[className]
						)}
						switched={active === index}
						onClick={toggleActive}
						theme={ButtonTheme.SWITCHER}
					>
						{value}
					</Button>
				))}
			</div>
		);
	}
);
