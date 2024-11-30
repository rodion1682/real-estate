import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Filterbar.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { memo, useCallback } from 'react';
import { InputTheme } from 'shared/ui/Input/ui/Input';
import { Dropdown } from 'shared/ui/Dropdown';
import { Select } from 'shared/ui/Select';
import { Switcher } from 'shared/ui/Switcher';
import { InputRange } from 'shared/ui/InputRange';
import { useSelector } from 'react-redux';
import {
	getAreaRange,
	getDealType,
	getObjectType,
	getPriceRange,
	getSearchValue,
	objectsFiltersActions,
} from 'entities/ObjectsFilters';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { labelRangeTernary } from 'shared/lib/labelRangeTernary/labelRangeTernary';

interface FilterbarProps {
	className?: string;
}

export const Filterbar = memo(({ className }: FilterbarProps) => {
	const { t } = useTranslation();
	const options = [
		t('Highest price first'),
		t('Lowest price first'),
		t('Largest m² area first'),
		t('Smallest m² area first'),
	];
	const dispatch = useAppDispatch();
	const searchValue = useSelector(getSearchValue);
	const dealType = useSelector(getDealType);
	const objectType = useSelector(getObjectType);
	const priceRange = useSelector(getPriceRange);
	const areaRange = useSelector(getAreaRange);

	const onSearchChange = useCallback(
		(value: string) => {
			dispatch(objectsFiltersActions.setFilters({ search: value }));
		},
		[dispatch]
	);

	const onDealTypeChange = useCallback(
		(rentValue: boolean, saleValue: boolean) => {
			dispatch(
				objectsFiltersActions.setFilters({
					dealType: { rent: rentValue, sale: saleValue },
				})
			);
		},
		[dispatch]
	);

	const onObjectTypeChange = useCallback(
		(apartamentsValue: boolean, houseValue: boolean) => {
			dispatch(
				objectsFiltersActions.setFilters({
					objectType: {
						apartaments: apartamentsValue,
						house: houseValue,
					},
				})
			);
		},
		[dispatch]
	);

	const onPriceRangeChange = useCallback(
		(from: number, to: number) => {
			dispatch(
				objectsFiltersActions.setFilters({
					price: {
						from: from,
						to: to,
					},
				})
			);
		},
		[dispatch]
	);

	const onAreaRangeChange = useCallback(
		(from: number, to: number) => {
			dispatch(
				objectsFiltersActions.setFilters({
					area: {
						from: from,
						to: to,
					},
				})
			);
		},
		[dispatch]
	);
	const onFilterSubmit = () => {
		console.log(searchValue);
		console.log(objectType);
		console.log(priceRange);
		console.log(areaRange);
	};

	return (
		<div
			className={classNames(cls.Filterbar, {}, [className])}
			data-testid="filterbar"
		>
			<div className={cls.Filterbar__top}>
				<div className={cls.Filterbar__actions}>
					<Switcher
						onChange={onDealTypeChange}
						dataFirstValue={dealType!.sale}
						firstValue={t('Sale')}
						secondValue={t('Rent')}
					/>

					<Switcher
						dataFirstValue={objectType!.apartaments}
						onChange={onObjectTypeChange}
						firstValue={t('Apartment')}
						secondValue={t('House')}
					/>
				</div>
				<div className={cls.Filterbar__input}>
					<Input
						value={searchValue}
						onChange={onSearchChange}
						placeholder={t('Search by Address')}
						theme={InputTheme.SEARCH_INPUT}
					/>
				</div>
			</div>
			<div className={cls.Filterbar__bottom}>
				<div className={cls.Filterbar__dropdowns}>
					<Dropdown
						label={labelRangeTernary(
							priceRange!.from,
							priceRange!.to,
							t('Price')
						)}
					>
						<InputRange
							from={priceRange?.from}
							to={priceRange?.to}
							onChange={onPriceRangeChange}
							theme={InputTheme.EURO}
						/>
					</Dropdown>
					<Dropdown
						label={labelRangeTernary(
							areaRange!.from,
							areaRange!.to,
							t('Area size')
						)}
					>
						<InputRange
							from={areaRange?.from}
							to={areaRange?.to}
							onChange={onAreaRangeChange}
							theme={InputTheme.AREA}
						/>
					</Dropdown>
					<Select options={options} />
				</div>
				<Button
					onClick={onFilterSubmit}
					className={cls.Filterbar__submit}
					theme={ButtonTheme.SUBMIT}
				>
					{t('Search')}
				</Button>
			</div>
		</div>
	);
});
