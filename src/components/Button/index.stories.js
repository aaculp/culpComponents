// Libraries 

import React from 'react';

// Dependencies
import Button from '.';

// Private

const Template = (args) => <Button {...args} />

// Public

export default {
    component: Button,
    title: 'Components/Button',
    parameters: {
        componentSubtitle: 'Button Component',
        docs: { description: { component: '' } },
    },
    argTypes: {
        backgroundColor: {
            description: 'Override background color.',
            type: 'string'
        },
        children: {
            description: 'The contents of the button'
        }
    }
}

export const Default = Template.bind({});
Default.args = {
    backgroundColor: 'black',
    children: 'Button Text'
}

export const Primary = Template.bind({});
Primary.args = {
    backgroundColor: 'red',
    children: 'Button Text'
}