import { BuildOptions } from './types/config';
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export function buildDevServer({
	paths,
	port,
}: BuildOptions): DevServerConfiguration {
	return {
		port: port || 3000,
		open: true,
		hot: true,
		historyApiFallback: true,
	};
}
