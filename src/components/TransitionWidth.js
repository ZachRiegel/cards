import React, {useCallback, useState} from 'react'
import styled, {css} from 'styled-components'

const Outer = styled.div`
   ${  props => props.targetWidth
       ? css `
           width: ${props.targetWidth}px;
       `
       : null
   }
   ${  props => props.targetHeight
       ? css `
           height: ${props.targetHeight}px;
       `
       : null
   }
   flex-direction: row;
   align-items: center;
   justify-content: center;
   display: flex;
   transition: height 400ms ease, width 400ms ease;
   overflow: hidden;
   min-width: 200px;
   min-height: 110px;
`;

const Inner = styled.div`
   width: max-content;
   min-width: max-content;
`;

const TransitionWidth = (props) => {
   const [targetWidth, setTargetWidth] = useState();
   const [targetHeight, setTargetHeight] = useState();

   const [observer] = useState(new ResizeObserver((entries) => {
      let {width, height} = entries[0].target.getBoundingClientRect();
      setTargetWidth(width);
      setTargetHeight(height);
   }));

   let innerBoxRef = useCallback(node => {
      observer.disconnect();
      if (node) {
         observer.observe(node);
         setTargetWidth(node.getBoundingClientRect().width);
         setTargetHeight(node.getBoundingClientRect().height);
      }
   }, [observer]);

   return(
      <Outer targetWidth={targetWidth} targetHeight={targetHeight}>
         <Inner ref={innerBoxRef}>
            {props.children}
         </Inner>
      </Outer>
   );
}

export default TransitionWidth;
