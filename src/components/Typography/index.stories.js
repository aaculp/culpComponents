// Libraries 

import React from 'react';

// Dependencies
import Typography from '.';

// Private

const Template = (args) => <Typography {...args} />

// Public

export default {
    component: Typography,
    title: 'Components/Typography',
    parameters: {
        componentSubtitle: 'Typography Component',
        docs: { description: { component: '' } },
    },
    argTypes: {
        children: {
            description: 'The contents of the Typography'
        },
        color: {
            description: 'Override Typography text color.',
            type: 'string'
        }
    }
}

export const Default = Template.bind({});
Default.args = {
    children: "Hey I'm a text field",
    color: 'black',
}

export const Primary = Template.bind({});
Primary.args = {
    children: "Hey I'm a text field",
    color: 'red',
}

export const Secondary = Template.bind({});
Secondary.args = {
    children: "Hey I'm a text field",
    color: 'orange',
}