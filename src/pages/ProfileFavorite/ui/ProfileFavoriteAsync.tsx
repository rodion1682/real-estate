import { lazy } from 'react';

export const ProfileFavoriteAsync = lazy(
	() =>
		new Promise((resolve) => {
			setTimeout(() => {
				// @ts-ignore
				resolve(import('./ProfileFavorite'));
			}, 1500);
		})
);
