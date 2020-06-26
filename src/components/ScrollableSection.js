import React, {useEffect, useRef, useState} from 'react'

import styled, {css} from 'styled-components'

const OuterLayer = styled.div`
    flex: 1;
    position: relative;
    overflow-Y: auto;
    overflow-X: hidden;
    display: flex;
    flex-direction: column;
`;

const InnerLayer = styled.div`
    margin-right: calc(100% - 100vw);
    display: flex;
    flex-direction: column;
    flex: 1;
`;

const ScrollableSection = (props) => {
    const innerRef = useRef();
    const outerRef = useRef();
    const [margin, setMargin] = useState(0);
    const [observer] = useState(new ResizeObserver(()=>{
        let innerWidth = innerRef.current;
        let outerWidth = outerRef.current;
        setMargin(`${innerWidth - outerWidth}px`);
    }));

    useEffect(()=>{
        observer.observe(outerRef.current);
        return (()=>{
            observer.disconnect();
        });
    }, []);

    return(
        <OuterLayer ref={outerRef}>
			<InnerLayer ref={innerRef} style={{marginRight: margin}}>
                {props.children}
            </InnerLayer>
        </OuterLayer>
    )
}

export default ScrollableSection;