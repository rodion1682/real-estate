import { memo, useCallback, useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Slider.module.scss';
import { SERVER_URL } from 'shared/consts/serverUrl';
import { Button, ButtonTheme } from 'shared/ui/Button';
import ArrowIcon from 'shared/assets/arrow.svg';
import { SvgIcon } from 'shared/ui/SvgIcon/ui/SvgIcon';

interface SliderProps {
	className?: string;
	slides?: string[];
}

enum ButtonTypes {
	PREV = 'PREV',
	NEXT = 'NEXT',
}

export const Slider = memo((props: SliderProps) => {
	const { className, slides = [] } = props;
	const [visibleSlide, setVisibleSlide] = useState(0);
	const [imageSlides, setImageSlides] = useState<JSX.Element[]>([]);
	const length = slides.length - 1;

	const handleChangeSlide = useCallback(
		(type: ButtonTypes) => {
			setVisibleSlide((prev) => {
				if (type === ButtonTypes.NEXT) {
					return prev < length ? prev + 1 : 0;
				} else if (type === ButtonTypes.PREV) {
					return prev > 0 ? prev - 1 : length;
				}
				return prev;
			});
		},
		[length]
	);

	const handleThumbnail = useCallback(
		(index: number) => {
			console.log(index);

			if (index !== visibleSlide) {
				setVisibleSlide(index);
			}
		},
		[visibleSlide]
	);

	useEffect(() => {
		if (slides && length > 0) {
			setVisibleSlide(0);
			const images = slides.map((item) => (
				<img
					className={cls.Slider__slide}
					key={item}
					src={__PROJECT__ !== 'storybook' ? `${SERVER_URL}${item}` : item}
					alt={`Slide ${item}`}
				/>
			));
			setImageSlides(images);
		}
	}, [slides, length]);

	return (
		<div className={classNames(cls.Slider, {}, [className])}>
			<Button
				className={classNames(cls.Slider__button, {}, [
					cls.Slider__button_next,
				])}
				onClick={() => handleChangeSlide(ButtonTypes.NEXT)}
				theme={ButtonTheme.CLEAR}
			>
				<SvgIcon
					className={classNames(cls.Slider__icon, {}, [
						cls.Slider__icon_next,
					])}
				>
					<ArrowIcon />
				</SvgIcon>
			</Button>
			<Button
				className={classNames(cls.Slider__button, {}, [
					cls.Slider__button_prev,
				])}
				onClick={() => handleChangeSlide(ButtonTypes.PREV)}
				theme={ButtonTheme.CLEAR}
			>
				<SvgIcon
					className={classNames(cls.Slider__icon, {}, [
						cls.Slider__icon_prev,
					])}
				>
					<ArrowIcon />
				</SvgIcon>
			</Button>
			{imageSlides[visibleSlide]}
			<div className={cls.Slider__thumbnails}>
				{imageSlides.map((_, index) => (
					<Button
						onClick={() => handleThumbnail(index)}
						key={index}
						theme={ButtonTheme.THUMBNAIL}
						className={classNames(
							cls.Slider__thumbnail,
							{
								[cls.Slider__thumbnail_active]: index === visibleSlide,
							},
							[className]
						)}
					>
						{imageSlides[index]}
					</Button>
				))}
			</div>
		</div>
	);
});
