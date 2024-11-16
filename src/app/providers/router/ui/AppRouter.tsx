import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
	profileRouteConfig,
	routeConfig,
	RoutePath,
} from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

export function AppRouter() {
	console.log(profileRouteConfig);
	return (
		<>
			<Suspense fallback={<PageLoader />}>
				{/*<Routes>
				{Object.values(routeConfig).map(({ path, element }) => (
					<Route key={path} path={path} element={element} />
				))}
			</Routes>*/}
				<Routes>
					<Route
						path={routeConfig.main.path}
						element={routeConfig.main.element}
					/>
					<Route
						path={routeConfig.apartment.path}
						element={routeConfig.apartment.element}
					/>
					<Route
						path={routeConfig.profile.path}
						element={routeConfig.profile.element}
					>
						<Route
							path={profileRouteConfig.favorite.path}
							element={profileRouteConfig.favorite.element}
						/>
						<Route
							path={profileRouteConfig.my_objects.path}
							element={profileRouteConfig.my_objects.element}
						/>
						<Route
							path={profileRouteConfig.settings.path}
							element={profileRouteConfig.settings.element}
						/>
					</Route>
					<Route
						path={routeConfig.not_found.path}
						element={routeConfig.not_found.element}
					/>
				</Routes>
			</Suspense>
		</>
	);
}
