import { screen } from '@testing-library/react';

import { componentRender } from 'shared/lib/tests/componentRender';
import { Navbar } from 'widgets/Navbar/ui/Navbar';

describe('Navbar', () => {
	test('Test render', () => {
		componentRender(<Navbar />);

		expect(screen.getByTestId('navbar')).toBeInTheDocument();
	});
});
