import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
	profileRouteConfig,
	routeConfig,
} from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

export function AppRouter() {
	return (
		<>
			<Suspense fallback={<PageLoader />}>
				<Routes>
					{Object.values(routeConfig).map(({ path, element }) => {
						if (path === routeConfig.profile.path) {
							return (
								<Route key={path} path={path} element={element}>
									{Object.values(profileRouteConfig).map(
										({ path, element }) => (
											<Route
												key={path}
												path={path}
												element={element}
											/>
										)
									)}
								</Route>
							);
						} else {
							return <Route key={path} path={path} element={element} />;
						}
					})}
				</Routes>
			</Suspense>
		</>
	);
}
