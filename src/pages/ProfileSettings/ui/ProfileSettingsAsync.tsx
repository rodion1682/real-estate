import { lazy } from 'react';

export const ProfileSettingsAsync = lazy(
	() =>
		new Promise((resolve) => {
			setTimeout(() => {
				// @ts-ignore
				resolve(import('./ProfileSettings'));
			}, 1500);
		})
);
