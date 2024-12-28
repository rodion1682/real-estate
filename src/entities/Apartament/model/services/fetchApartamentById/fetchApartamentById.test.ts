import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Currency } from 'shared/consts/common';
import { fetchApartamentById } from './fetchApartamentById';

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

describe('fetchApartamentById.test', () => {
	test('success', async () => {
		const thunk = new TestAsyncThunk(fetchApartamentById);
		thunk.api.get.mockReturnValue(Promise.resolve({ data }));

		const result = await thunk.callThunk('1');

		expect(thunk.api.get).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('fulfilled');
		expect(result.payload).toEqual(data);
	});

	test('error', async () => {
		const thunk = new TestAsyncThunk(fetchApartamentById);
		thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
		const result = await thunk.callThunk('1');

		expect(result.meta.requestStatus).toBe('rejected');
	});
});
