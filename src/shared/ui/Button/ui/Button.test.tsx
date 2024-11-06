import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button';

describe('Button', () => {
	test('Test render', () => {
		render(<Button>TEST</Button>);
		expect(screen.getByText('TEST')).toBeInTheDocument();
	});
	test('Test filter theme', () => {
		render(<Button theme={ButtonTheme.FILTER}>TEST</Button>);
		expect(screen.getByText('TEST')).toHaveClass('filter');
		screen.debug();
	});
});
