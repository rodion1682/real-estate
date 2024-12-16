import { StateScheme } from 'app/providers/StoreProvider';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileError } from '../../types/profile';

describe('getProfileReadOnly test', () => {
	test('should return value', () => {
		const state = {
			profile: {
				validateErrors: [
					ValidateProfileError.SERVER_ERROR,
					ValidateProfileError.INCORECT_AGE,
				],
			},
		};
		expect(getProfileValidateErrors(state as StateScheme)).toEqual([
			ValidateProfileError.SERVER_ERROR,
			ValidateProfileError.INCORECT_AGE,
		]);
	});
	test('should work with empty string', () => {
		const state = {};
		expect(getProfileValidateErrors(state as StateScheme)).toEqual(undefined);
	});
});
