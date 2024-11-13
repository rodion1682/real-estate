import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoaders';

export default ({ config }: { config: webpack.Configuration }) => {
	const paths: BuildPaths = {
		output: '',
		entry: '',
		html: '',
		src: path.resolve(__dirname, '..', '..', 'src'),
	};

	config.resolve?.modules?.unshift(paths.src);
	config.resolve?.extensions?.push('ts', 'tsx');
	config.plugins?.push(
		new webpack.ProvidePlugin({
			React: 'react',
		})
	);
	config.module = config.module || {};

	// @ts-ignore
	config.module.rules = config.module.rules?.map((rule: RuleSetRule) => {
		if (/svg/.test(rule.test as string)) {
			return { ...rule, exclude: /\.svg$/i };
		}

		return rule;
	});
	config.module.rules?.push({
		test: /\.svg$/,
		use: ['@svgr/webpack'],
	});
	config.module.rules?.push(buildCssLoader(true));
	config.plugins?.push(
		new DefinePlugin({
			__IS_DEV__: true,
		})
	);

	return config;
};
