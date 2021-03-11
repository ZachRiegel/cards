import React from 'react'
import styled, {css} from 'styled-components'

import Row from './Row'
import ArrowLeft from 'images/icons/arrowLeft.svg'
import ArrowRight from 'images/icons/arrowRight.svg'
import {useHistory} from 'react-router-dom'

const NavItem = styled.div`
   padding: 15px;
   margin: 5px;
   min-width: 20px;
   min-height: 20px;
   flex: 0;
   border-radius: 50%;
   opacity: 0;
   ${props => props?.image ? css`
      opacity: 1;
      background-image: url(${props.image});
      &:hover {
         background-color: #f3f3f3;
         border-color: black;
      }
      &:active {
         background-color: #e7e7e7;
      }
   `:undefined}
   background-size: 20px 20px;
   background-repeat: no-repeat;
   background-position: center;
   border: 2px solid transparent;
   transition: background-color 150ms ease-in, border-color 150ms ease-in, opacity 250ms ease-in 200ms;
`;

const NavAction = (props) => {
   let history = useHistory();
   return(
      <Row>
         <NavItem image={!props.noBack?ArrowLeft:undefined} onClick={() => {
            if (!props.noBack) history.goBack();
         }}>
         </NavItem>
            {props.children}
         <NavItem image={props.fore?ArrowRight:undefined} onClick={() => {
            if (props.fore) history.goForward();
         }}>
         </NavItem>
      </Row>
   );
}

export default NavAction;
