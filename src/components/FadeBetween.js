import React, {useCallback, useState, useEffect} from 'react'
import {
    SwitchTransition,
    CSSTransition
} from 'react-transition-group'

import styled, {css} from 'styled-components'

let FadeBetween = (props) => {
    return(
        <SwitchTransition mode="out-in">
            <CSSTransition
                key={props.animationKey}
                classNames='fade'
                timeout={10000000}
                addEndListener={(node, done) => {
                  node.addEventListener('transitionend', (event) => {
                     if(event.target === node) done();
                  }, false);
                }}
                unmountOnExit
            >
                {props.children}
            </CSSTransition>
        </SwitchTransition>
    );
};

export default FadeBetween;
