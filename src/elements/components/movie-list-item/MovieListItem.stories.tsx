import { Meta } from '@storybook/react';

import MovieListItem from './MovieListItem';

export default {
    title: 'Components/MovieListItem',
    argTypes: {
        posterImage: { control: 'file' }
    },
    component: MovieListItem
} as Meta<typeof MovieListItem>;

export const MovieListItemExample = {};
