import React, {useContext, useCallback} from 'react'
import styled, {css} from 'styled-components'
import ManagedField from 'contexts/ManagedField'
import _ from 'lodash'

import FadeBetween from './FadeBetween'
import AnimatedContainer from './AnimatedContainer'

const Input = styled.input`
   display: block;
   outline: none;
   padding: 2px;
   padding-right: 30px;
   width: 150px;
   border: 0;
   border-bottom: 2px solid black;
   z-index: 3;
   background-color: transparent;
   font-family: 'B612', serif;
   font-size: 16px;
   position: relative;
`;

const InputWrapper = styled.div`
   position: relative;
`;
//box-shadow: 2px 1px 2px rgba(0,0,0,0.16), 2px 1px 2px rgba(0,0,0,0.23);

const Shell = styled.div`
   min-width: min-content;
   flex: 1;
   padding: 6px;
   font-family: 'B612', seriff;
   position: relative;
   border-radius: 6px;
   overflow:hidden;
   ${props=> css`
      grid-area: ${props.location || 'none'};
   `}

   & > div::before {
      content: "";
      width: 100%;
      height: 100%;
      background-color: transparent;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      transition: background-color 400ms linear;
   }
   &:focus-within > div::before {
      background-color: #efefef;
   }
`;
const Label = styled.span`
   text-decoration: underline transparent;
   font-size: 15px;
   color: black;
   position: relative;
   z-index: 3;
`;

const Error = styled.div`
   width: 10px;
   height: 10px;
   background-color: #f44336;
   border: 2px solid black;
   border-radius: 50%;
   position: absolute;
   right: 5px;
   top: 50%;
   transform: translateY(-50%);
`;

const TextField = (props) => {
   let fieldContext = useContext(ManagedField);
   let onChange = useCallback((event) => {
      console.log(!props?.validate?.(event?.target?.value));
      fieldContext?.update(props?.fieldName)?.(event?.target?.value, !props?.validate?.(event?.target?.value));
   });

   return(
      <Shell location={props.location || props.fieldName}>
         <div>
            <Label>
               {
                  props.label
                  || _(props?.fieldName || '')
                     .split(/(?=[A-Z])/)
                     .reduce((acc, val) => `${acc} ${val}`, '')
                     .split(/\s+/g)
                     .filter(x => !!x)
                     .map(s => (s?.[0]?.toUpperCase?.()+s?.slice?.(1) || ''))
                     .reduce((acc, val) => `${acc} ${val}`, '')+':'
               }
            </Label>
            <InputWrapper>
               <Input value={fieldContext?.content?.[props.fieldName] || ''}
               onChange={onChange}/>
               <FadeBetween animationKey={fieldContext?.invalidity?.[props.fieldName]}>
                  <AnimatedContainer>
                     {fieldContext?.invalidity?.[props.fieldName]
                        ?  <Error/>
                        : undefined
                     }
                  </AnimatedContainer>
               </FadeBetween>
            </InputWrapper>
         </div>
      </Shell>
   );
}

export default TextField;
