import { MainPage } from 'pages/MainPage';
import { ApartmentPage } from 'pages/ApartmentPage';
import { NotFoundPage } from 'pages/NotFound';
import { RouteProps } from 'react-router-dom';
import { ProfilePage } from 'pages/ProfilePage';
import { ProfileFavorite } from 'pages/ProfileFavorite';
import { ProfileMyObjects } from 'pages/ProfileMyObjects';
import { ProfileSettings } from 'pages/ProfileSettings';

export enum AppRoutes {
	MAIN = 'main',
	APARTMENT = 'apartment',
	PROFILE = 'profile',
	NOT_FOUND = 'not_found',
}

export enum ProfileRoutes {
	FAVORITE = 'favorite',
	MY_OBJECTS = 'my_objects',
	SETTINGS = 'settings',
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.APARTMENT]: '/apartment',
	[AppRoutes.PROFILE]: '/profile',
	[AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.MAIN]: {
		path: RoutePath.main,
		element: <MainPage />,
	},
	[AppRoutes.APARTMENT]: {
		path: RoutePath.apartment,
		element: <ApartmentPage />,
	},
	[AppRoutes.PROFILE]: {
		path: RoutePath.profile,
		element: <ProfilePage />,
	},
	[AppRoutes.NOT_FOUND]: {
		path: RoutePath.not_found,
		element: <NotFoundPage />,
	},
};

export const ProfileRoutePath: Record<ProfileRoutes, string> = {
	[ProfileRoutes.FAVORITE]: '/profile/favorite',
	[ProfileRoutes.MY_OBJECTS]: '/profile/my-objects',
	[ProfileRoutes.SETTINGS]: '/profile/settings',
};

export const profileRouteConfig: Record<ProfileRoutes, RouteProps> = {
	[ProfileRoutes.FAVORITE]: {
		path: ProfileRoutePath.favorite,
		element: <ProfileFavorite />,
	},
	[ProfileRoutes.MY_OBJECTS]: {
		path: ProfileRoutePath.my_objects,
		element: <ProfileMyObjects />,
	},
	[ProfileRoutes.SETTINGS]: {
		path: ProfileRoutePath.settings,
		element: <ProfileSettings />,
	},
};
