import type { Preview } from '@storybook/react'
import '../src/index.css'
import { MemoryRouter } from 'react-router-dom'
import React from 'react'

const preview: Preview = {
    parameters: {
        backgrounds: {
            values: [
                { name: 'Dark', value: '#0d1117' },
                { name: 'Light', value: '#fff' },
            ],
            default: 'Light',
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        (Story) => (
            <MemoryRouter>
                <Story />
            </MemoryRouter>
        ),
    ],
}

export default preview
