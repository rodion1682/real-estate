import { screen } from '@testing-library/react';

import { componentRender } from 'shared/lib/tests/componentRender';
import { Filterbar } from './Filterbar';

describe('Filterbar', () => {
	test('Test render', () => {
		componentRender(<Filterbar />);

		expect(screen.getByTestId('filterbar')).toBeInTheDocument();
	});
});
