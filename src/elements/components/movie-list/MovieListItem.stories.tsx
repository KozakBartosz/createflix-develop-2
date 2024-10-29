import { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import MovieListItem from './MovieListItem'

export default {
    title: 'Components/MovieListItem',
    component: MovieListItem,
} as Meta<typeof MovieListItem>

type Story = StoryObj<typeof MovieListItem>

export const MovieListItemExample: Story = {
    args: {
        movie: {
            id: '1',
            title: 'Movie Title',
            posterImage: 'https://9px.pl/200x300',
            description: 'Movie Description',
        },
        isFavorite: false,
        onAddFavorite: fn(),
        onRemoveFavorite: fn(),
    },
}
