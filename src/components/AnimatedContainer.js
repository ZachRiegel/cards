import React, {useCallback, useState} from 'react'
import styled, {css} from 'styled-components'

const Shell = styled.div`
    width: 100%;
    height: 100%;

    &.fade-enter {
        opacity: 0;
    }
    &.fade-enter-active {
        opacity: 1;
        transition: opacity 400ms ease-in;
    }
    &.fade-exit {
        opacity: 1;
    }
    &.fade-exit-active {
      opacity: 0;
      transition: opacity 200ms ease-out;
    }
`;

let AnimatedContainer = (props) => {
    return(
        <Shell>
            {props.children}
        </Shell>
    );
};

export default AnimatedContainer;
