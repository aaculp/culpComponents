// Libraries 

import React from 'react';

// Dependencies

// Public

const Button = ({ backgroundColor, children }) => {

    console.log("backgroundColor", backgroundColor)
    console.log("children", children)

    return (
        <span>
            {children}
        </span>
    )
}

export default Button;