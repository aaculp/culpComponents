// Libraries 

import React from 'react';
import styled from 'styled-components';

// Dependencies

// Private

const StyledButton = styled.span`
 ${({ $backgroundColor,$borderStyle, $color }) => `
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

const Button = ({ backgroundColor, borderStyle, children, color }) => (
    <StyledButton
        $backgroundColor={backgroundColor}
        $borderStyle={borderStyle}
        $color={color}
    >
        {children}
    </StyledButton>
);

export default Button;