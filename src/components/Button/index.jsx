// Libraries 

import React from 'react';
import styled from 'styled-components';

// Dependencies

// Private

const StyledButton = styled.button`
 ${({ $backgroundColor, $borderStyle, $color }) => `
    align-content: center;
    background: ${$backgroundColor};
    border: ${$borderStyle};
    border-radius: 25px;
    color: ${$color};
    display: flex;
    flex-direction: column;
    height: 20px;
    justify-content: center;
    padding: 10px;
    text-align: center;
    width: 100px;
 `}
`;

// Public

const Button = ({ backgroundColor, borderStyle, children, color, isLink = false, ...otherProps }) => {
    const element = isLink ? 'a' : 'button';

    return (
        <StyledButton
            $backgroundColor={backgroundColor}
            $borderStyle={borderStyle}
            $color={color}
            // Need to update functionality
            aria-pressed="false"
            forwardedAs={element}
            tabindex="0"
            type="button"
            {...otherProps}
        >
            {children}
        </StyledButton>
    )
}

export default Button;