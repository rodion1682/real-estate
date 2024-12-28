import { render, screen, fireEvent } from '@testing-library/react';
import { Slider } from './Slider';
const slides = [
	'shared/assets/tests/1.jpg',
	'shared/assets/tests/2.jpg',
	'shared/assets/tests/3.jpg',
];

describe('Slider Component', () => {
	it('renders the Slider with the first slide visible', () => {
		const { container } = render(<Slider slides={slides} />);
		const firstSlide = container.querySelector(`img[src$="${slides[0]}"]`);

		expect(firstSlide).toBeInTheDocument();
	});

	it('navigates to the next slide when Next button is clicked', () => {
		const { container } = render(<Slider slides={slides} />);
		const nextButton = container.querySelector('.Slider__button_next');

		fireEvent.click(nextButton!);
		const secondSlide = container.querySelector(`img[src$="${slides[1]}"]`);

		expect(nextButton).toBeInTheDocument();
		expect(secondSlide).toBeInTheDocument();
	});

	it('navigates to the previous slide when Prev button is clicked', () => {
		const { container } = render(<Slider slides={slides} />);

		const nextButton = container.querySelector('.Slider__button_next');
		fireEvent.click(nextButton!);

		const prevButton = container.querySelector('.Slider__button_prev');
		fireEvent.click(prevButton!);

		const firstSlide = container.querySelector(`img[src$="${slides[0]}"]`);

		expect(nextButton).toBeInTheDocument();
		expect(prevButton).toBeInTheDocument();
		expect(firstSlide).toBeInTheDocument();
	});

	it('loops to the last slide when Prev is clicked on the first slide', () => {
		const { container } = render(<Slider slides={slides} />);

		const prevButton = container.querySelector('.Slider__button_prev');
		fireEvent.click(prevButton!);

		const lastSlide = container.querySelector(
			`img[src$="${slides[slides.length - 1]}"]`
		);

		expect(prevButton).toBeInTheDocument();
		expect(lastSlide).toBeInTheDocument();
	});

	it('loops to the first slide when Next is clicked on the last slide', () => {
		const { container } = render(<Slider slides={slides} />);

		const nextButton = container.querySelector('.Slider__button_next');
		fireEvent.click(nextButton!);
		fireEvent.click(nextButton!);
		fireEvent.click(nextButton!);

		const firstSlide = container.querySelector(`img[src$="${slides[0]}"]`);

		expect(nextButton).toBeInTheDocument();
		expect(firstSlide).toBeInTheDocument();
	});

	it('navigates to a specific slide when a thumbnail is clicked', () => {
		const { container } = render(<Slider slides={slides} />);

		const thumbnails = container.querySelectorAll('.Slider__thumbnail');
		expect(thumbnails.length);

		fireEvent.click(thumbnails[2]!);
		expect(thumbnails[2]).toHaveClass('Slider__thumbnail_active');

		const lastSlide = container.querySelector(
			`img[src$="${slides[slides.length - 1]}"]`
		);

		expect(lastSlide).toBeInTheDocument();

		thumbnails.forEach((thumbnail, index) => {
			if (index !== 2) {
				expect(thumbnail).not.toHaveClass('Slider__thumbnail_active');
			}
		});
	});
});
