// Libraries 

import React from 'react';
import styled from 'styled-components';

// Dependencies

// Private

const StyledTypography = styled.span`
 ${({ $color }) => `
    color: ${$color};
    text-align: center;
 `}
`;

// Public

const Typography = ({ children, color, ...otherProps }) => {
    return (
        <StyledTypography
            $color={color}
            {...otherProps}
        >
            {children}
        </StyledTypography>
    )
}
export default Typography;