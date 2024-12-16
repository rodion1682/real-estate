import { ProfileType, ValidateProfileError } from '../../types/profile';

export const validateProfileData = (profile?: ProfileType) => {
	if (!profile) {
		return [ValidateProfileError.NO_DATA];
	}

	const { first, lastname, age, city } = profile;
	const errors: ValidateProfileError[] = [];

	if (!first || !lastname) {
		errors.push(ValidateProfileError.INCORECT_USER_DATA);
	}

	if (!age || !Number.isInteger(age)) {
		errors.push(ValidateProfileError.INCORECT_AGE);
	}

	if (!city) {
		errors.push(ValidateProfileError.INCORECT_CITY);
	}

	return errors;
};
