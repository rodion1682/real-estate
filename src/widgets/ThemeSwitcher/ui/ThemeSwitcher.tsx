import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import ThemeIcon from 'shared/assets/theme.svg';
import { useTheme } from 'app/providers/ThemeProvider';
import { SvgIcon } from 'shared/ui/SvgIcon/ui/SvgIcon';
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button';

interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
	const { toggleTheme } = useTheme();
	return (
		<Button
			className={classNames(cls.ThemeSwitcher, {}, [className])}
			onClick={toggleTheme}
			theme={ButtonTheme.SWITCHER}
		>
			<SvgIcon>
				<ThemeIcon />
			</SvgIcon>
		</Button>
	);
};
