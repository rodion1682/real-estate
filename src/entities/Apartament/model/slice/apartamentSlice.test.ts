import {
	profileActions,
	profileReducer,
	ProfileScheme,
	updateProfileData,
	ValidateProfileError,
} from 'entities/Profile';
import { ApartamentScheme } from '../types/apartamentScheme';
import { apartamentReducer } from './apartamentSlice';
import { fetchApartamentById } from '../services/fetchApartamentById/fetchApartamentById';
import { Apartament } from '../types/apartament';

const data: Apartament = {
	id: '1',
	price: '750',
	dealType: 'rent',
	objectType: 'apartament',
	address: 'Dzintaru prospekts, Dzintari',
	date: '24.12.2024',
	size: '92',
	badroom: '2',
	floor: '2/3',
	preview: 'shared/assets/tests/1.jpg',
	images: [
		'shared/assets/tests/1.jpg',
		'shared/assets/tests/2.jpg',
		'shared/assets/tests/3.jpg',
	],
	description:
		'Experience comfortable living in this modern, spacious apartment available for rent.',
};

describe('profileSlice.test', () => {
	test('test service pending', () => {
		const state: DeepPartial<ApartamentScheme> = {
			isLoading: true,
			error: undefined,
		};

		expect(
			apartamentReducer(
				state as ApartamentScheme,
				fetchApartamentById.pending('testRequestId', '1')
			)
		).toEqual({
			isLoading: true,
			error: undefined,
		});
	});
	test('test update profile service fullfiled', () => {
		const state: DeepPartial<ApartamentScheme> = {
			isLoading: true,
		};

		expect(
			apartamentReducer(
				state as ApartamentScheme,
				fetchApartamentById.fulfilled(data, 'testRequestId', '1')
			)
		).toEqual({
			isLoading: false,
			error: undefined,
			data: data,
		});
	});
});
