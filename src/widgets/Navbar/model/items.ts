import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export interface NavbarItemType {
	path: string;
	text: string;
	Icon?: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const NavbarItemsList: NavbarItemType[] = [
	{
		path: RoutePath.main,
		text: 'Main page',
	},
	{
		path: RoutePath.apartment,
		text: 'Apartament page',
	},
];
