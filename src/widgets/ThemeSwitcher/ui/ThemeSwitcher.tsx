import { classNames } from 'shared/lib/classNames/classNames';
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
			theme={ButtonTheme.THEME_SWITCHER}
			className={classNames('', {}, [className])}
			onClick={toggleTheme}
		>
			<SvgIcon>
				<ThemeIcon />
			</SvgIcon>
		</Button>
	);
};
