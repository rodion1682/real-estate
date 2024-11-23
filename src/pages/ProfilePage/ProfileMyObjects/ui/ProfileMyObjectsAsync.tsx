import { lazy } from 'react';

export const ProfileMyObjectsAsync = lazy(
	() =>
		new Promise((resolve) => {
			setTimeout(() => {
				// @ts-ignore
				resolve(import('./ProfileMyObjects'));
			}, 1500);
		})
);
