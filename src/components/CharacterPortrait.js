import React, {useState, useEffect} from 'react'
import _ from 'lodash'
import styled, {css} from 'styled-components'

const Shell = styled.div`
   flex: 1;
   font-family: 'B612', seriff;
   overflow:hidden;
   ${props=> css`
      grid-area: ${props.location || 'none'};
   `}
   display: flex;
   justify-content: center;
`;
const Label = styled.span`
   text-decoration: underline transparent;
   font-size: 15px;
   color: black;
`;
const Photo = styled.div`
   min-width: 131px;
   background-color: ${props => props.color||'rebeccapurple'};
   padding-bottom: 100%;
   border-radius: 6px;
   border: 4px solid black;
   transition: background-color 300ms linear;
`;

const CharacterPortrait = (props) => {
   let [color, setColor] = useState();
   useEffect(() => {
      if (props.validity && props.color) setColor(props.color);
   }, [props.color, props.validity])
   return (
      <Shell location={'characterPortrait'}>
         <Photo color={color}/>
      </Shell>
   );
};

export default CharacterPortrait;
