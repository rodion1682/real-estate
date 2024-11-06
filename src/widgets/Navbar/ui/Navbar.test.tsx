import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation';
import { Navbar } from 'widgets/Navbar/ui/Navbar';

describe('Navbar', () => {
	test('Test render', () => {
		renderWithTranslation(
			<MemoryRouter>
				<Navbar />
			</MemoryRouter>
		);
		expect(screen.getByTestId('navbar')).toBeInTheDocument();
	});
});
