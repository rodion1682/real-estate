import webpack from 'webpack';

import { BuildOptions } from './types/config';
import { buildResolvers } from './buildResolvers';
import { buildPlugins } from './buildPlugins';
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';

export function buildWebpackConfig(
	options: BuildOptions
): webpack.Configuration {
	const { isDev, paths, mode, port } = options;
	return {
		mode: mode,
		entry: paths.entry,
		output: {
			filename: '[name].[contenthash].js',
			path: paths.output,
			clean: true,
		},
		module: {
			rules: buildLoaders(options),
		},
		resolve: buildResolvers(options),
		plugins: buildPlugins(options),
		devtool: isDev ? 'inline-source-map' : undefined,
		devServer: isDev ? buildDevServer(options) : undefined,
	};
}
