import React from 'react'

import styled, {css} from 'styled-components'

const Centerer = styled.div`
    display: flex;
    max-width: 100%;
    width: 100%;
    height: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const Centered = styled.div`margin-bottom:-4.16px;`;

let CenterElements = (props) => {
    return(
        <Centerer>
            <Centered>{props.children}</Centered>
        </Centerer>
    )
};

export default CenterElements;
