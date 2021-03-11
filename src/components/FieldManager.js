import React, {useEffect, useState, useCallback} from 'react'
import styled, {css} from 'styled-components'
import ManagedField from 'contexts/ManagedField'

const FieldGrid = styled.div`
   display: grid;
   grid-auto-columns: minmax(min-content , max-content);
   //grid-auto-rows: max-content;
   grid-row-gap: 10px;
   grid-column-gap: 10px;
   width: 100%;
   ${
      props => css`
         grid-template-areas: ${props.layout};
      `
   }
   justify-content: center;
`;

const FieldManager = (props) => {
   let update = useCallback((fieldName) => (value, validity=true) => {
      let temp = {...props.content};
      temp[fieldName] = value;
      props?.setContent?.(temp);

      let tempInvalidity = {...props.invalidity};
      tempInvalidity[fieldName] = !validity;
      props?.setInvalidity?.(tempInvalidity);
   }, [props.content, props.setContent, props.invalidity, props.setInvalidity, props.validate]);

   return(
      <ManagedField.Provider value={{
         content: props.content,
         invalidity: props.invalidity,
         update,
      }}>
         <FieldGrid layout={props.layout}>
            {props.children}
         </FieldGrid>
      </ManagedField.Provider>
  );
}

export default FieldManager;
