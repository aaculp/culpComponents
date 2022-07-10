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
            description: 'Override background color style.',
            type: 'string'
        },
        borderStyle: {
            description: 'Override border.',
            type: 'string'
        },
        children: {
            description: 'The contents of the button'
        },
        color: {
            description: 'Override Typography text color.',
            type: 'string'
        },
        isLink: {
            description: 'Changes DOM structure for Links.',
        }
    }
}

export const Default = Template.bind({});
Default.args = {
    backgroundColor: '#4d524d',
    borderStyle: "1px solid #4d524d",
    children: 'Submit',
    color: 'white',
    isLink: false
}

export const Primary = Template.bind({});
Primary.args = {
    backgroundColor: 'green',
    borderStyle: "1px solid transparent",
    children: 'Submit',
    color: 'white',
    isLink: false
}

export const Secondary = Template.bind({});
Secondary.args = {
    backgroundColor: 'red',
    borderStyle: "2px solid black",
    children: 'Submit',
    color: 'white',
    isLink: false
}