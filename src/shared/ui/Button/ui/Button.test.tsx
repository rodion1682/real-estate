import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button';

describe('Button', () => {
	test('Test render', () => {
		render(<Button>TEST</Button>);
		expect(screen.getByText('TEST')).toBeInTheDocument();
	});
	test('Test main theme', () => {
		render(<Button theme={ButtonTheme.MAIN_BUTTON}>TEST</Button>);
		expect(screen.getByText('TEST')).toHaveClass('main_button');
		screen.debug();
	});
});
