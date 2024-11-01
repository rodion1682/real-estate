import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from './routeConfig';

export function AppRouter() {
	return (
		<Suspense fallback={'loding'}>
			<Routes>
				{Object.values(routeConfig).map(({ path, element }) => (
					<Route key={path} path={path} element={element} />
				))}
			</Routes>
		</Suspense>
	);
}
