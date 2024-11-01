import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import {
	BuildEnv,
	BuildOptions,
	BuildPaths,
} from './config/build/types/config';
import path from 'path';

export default (env: BuildEnv) => {
	const paths: BuildPaths = {
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		output: path.resolve(__dirname, 'build'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		src: path.resolve(__dirname, 'src'),
	};

	const mode = env.mode || 'development';
	const isDev = mode === 'development';
	const PORT = env.port || 3000;

	const options: BuildOptions = {
		paths,
		isDev,
		mode,
		port: PORT,
	};

	const config = buildWebpackConfig(options);

	return config;
};
