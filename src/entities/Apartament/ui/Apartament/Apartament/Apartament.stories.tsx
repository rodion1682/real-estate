import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Apartament } from './Apartament';
import slide1 from 'shared/assets/tests/1.jpg';
import slide2 from 'shared/assets/tests/2.jpg';
import slide3 from 'shared/assets/tests/3.jpg';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta = {
	title: 'entities/Apartament',
	component: Apartament,
	args: { id: '1' },
} satisfies Meta<typeof Apartament>;

export default meta;
type Story = StoryObj<typeof meta>;

const apartament = {
	id: '1',
	price: '750',
	dealType: 'rent',
	objectType: 'apartament',
	address: 'Dzintaru prospekts, Dzintari',
	date: '24.12.2024',
	size: '92',
	badroom: '2',
	floor: '2/3',
	images: [slide1, slide2, slide3],
	description:
		'Experience comfortable living in this modern, spacious apartment available for rent. Perfectly situated in a vibrant neighborhood, this apartment features [number] bedrooms and [number] bathrooms, offering ample space for individuals, couples, or families. The open-concept living area is complemented by large windows that fill the space with natural light, while the fully equipped kitchen boasts contemporary appliances and plenty of storage. Enjoy access to nearby amenities, including parks, shopping centers, and public transportation, making your daily life convenient and enjoyable. With its stylish design and prime location, this apartment is the perfect place to call home. Schedule a viewing today!',
};

export const Primary: Story = {
	args: {},
};
Primary.decorators = [StoreDecorator({ apartament: { data: apartament } })];

export const PrimaryDark: Story = {
	args: {},
};
PrimaryDark.decorators = [
	ThemeDecorator(Theme.DARK),
	StoreDecorator({ apartament: { data: apartament } }),
];

export const withError: Story = {
	args: {},
};
withError.decorators = [StoreDecorator({ apartament: { error: 'error' } })];

export const Loading: Story = {
	args: {},
};
Loading.decorators = [StoreDecorator({ apartament: { isLoading: true } })];
