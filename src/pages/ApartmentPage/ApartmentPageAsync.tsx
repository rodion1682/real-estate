import { lazy } from 'react';

export const ApartmentPageAsync = lazy(
	() =>
		new Promise((resolve) => {
			setTimeout(() => {
				// @ts-ignore
				resolve(import('./ApartmentPage'));
			}, 1500);
		})
);
