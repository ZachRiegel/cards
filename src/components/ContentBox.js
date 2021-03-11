import React, {useCallback, useState, useEffect} from 'react'

import Header from './Header'
import TransitionWidth from './TransitionWidth'
import CenterElements from './CenterElements'

import styled, {css} from 'styled-components'

const Box = styled.div`
    border-radius: 5px;
    padding: 15px;
    margin: 0;
    border: 2px solid black;
    background-color: white;
    ${  props => !props.noShadow
        ? css `
            box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        `
        : null
    }
`;

const Footer = styled.div`
    border-top: 1px solid black;
    font-family: 'B612', serif;
`;

const ContentBox = (props) => {
    const [content, setContent] = useState();
    useEffect(() => {
        setContent(
            <React.Fragment>
               {props.header
                   ? <Header>{props.header}</Header>
                   : null
               }
               {props.children}
               {props.footer
                   ? <Footer>{props.footer}</Footer>
                   : null
               }
            </React.Fragment>
        );
    }, [props.children, props.header, props.footer]);

   return(
      <Box>
         <TransitionWidth>
            {content}
         </TransitionWidth>
      </Box>
   )
};

export default ContentBox;
