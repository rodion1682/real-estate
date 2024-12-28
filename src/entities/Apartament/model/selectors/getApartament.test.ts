import { StateScheme } from 'app/providers/StoreProvider';
import {
	getApartamentData,
	getApartamentIsLoading,
	getApartamentError,
} from './getApartament';

describe('getApartament test', () => {
	test('should return data', () => {
		const data = {
			id: '1',
			price: '750',
			dealType: 'rent',
			objectType: 'apartament',
			address: 'Dzintaru prospekts, Dzintari',
			date: '24.12.2024',
			size: '92',
			badroom: '2',
			floor: '2/3',
		};
		const state = {
			apartament: {
				data: data,
			},
		};
		expect(getApartamentData(state as StateScheme)).toEqual(data);
	});
	test('should work with empty string', () => {
		const state = {};
		expect(getApartamentData(state as StateScheme)).toEqual(undefined);
	});
	test('should return isLoading', () => {
		const state: Partial<StateScheme> = {
			apartament: {
				isLoading: true,
			},
		};
		expect(getApartamentIsLoading(state as StateScheme)).toEqual(true);
	});
	test('should work with empty state isLoading', () => {
		const state = {};
		expect(getApartamentIsLoading(state as StateScheme)).toEqual(false);
	});
	test('should return error', () => {
		const state: DeepPartial<StateScheme> = {
			apartament: {
				error: 'error',
			},
		};
		expect(getApartamentError(state as StateScheme)).toEqual('error');
	});
	test('should work with empty state error', () => {
		const state: DeepPartial<StateScheme> = {};
		expect(getApartamentError(state as StateScheme)).toEqual(undefined);
	});
});
