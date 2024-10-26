import { Meta } from '@storybook/react';

import HeaderIcon from './HeaderIcon';

import gitlabIcon from '../../../gitlab-icon-rgb.png';

export default {
    title: 'Components/HeaderIcon',
    argTypes: {
        icon: { control: 'file' }
    },
    component: HeaderIcon
} as Meta<typeof HeaderIcon>;

export const HeaderIconExample = {
    args: {
        icon: gitlabIcon,
        link: 'https://gitlab.createit.pl:8888/js-dept/createflix',
        alt: 'Gitlab Logo'
    }
};
