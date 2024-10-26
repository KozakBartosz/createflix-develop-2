import { Meta } from '@storybook/react';

import Navbar from './Navbar';

export default {
    title: 'Components/Navbar',
    component: Navbar
} as Meta<typeof Navbar>;

export const NavigationExample = {
    args: {
        elements: ['Movie List', 'Favorites ', 'Instructions']
    }
};
