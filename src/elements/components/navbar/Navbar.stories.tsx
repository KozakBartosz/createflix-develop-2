import { Meta, StoryObj } from '@storybook/react'

import Navbar from './Navbar'

export default {
    title: 'Components/Navbar',
    component: Navbar,
} as Meta<typeof Navbar>

type Story = StoryObj<typeof Navbar>

export const NavigationExample: Story = {
    args: {
        elements: [
            {
                path: '/',
                title: 'Instructions',
            },
            {
                path: '/movie-list',
                title: 'Movie List',
            },
            {
                path: '/favorites',
                title: 'Favorites',
            },
        ],
    },
}
