import { Meta, StoryObj } from '@storybook/react'
import { Title } from './Title'

export default {
    title: 'Components/Title',
    component: Title,
} as Meta<typeof Title>

type Story = StoryObj<typeof Title>

export const TitleExample: Story = {
    args: {
        children: 'Title',
    },
}
