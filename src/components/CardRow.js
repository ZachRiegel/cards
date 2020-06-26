import React, {useState, useCallback} from 'react'

import styled, {css} from 'styled-components'
import Card from 'components/Card'


const CardDisplay = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: calc(100% + 20px);
    justify-content: center;
    margin: 0px 0px 0px -20px;
`;

const CardEntry = styled.div`
    margin: 20px 0 0 20px;
    padding: 0;
    border: 0;
    ${props => {
        if (props.hidden) {
            return  css`
                min-width: 0;
            `;
        } else {
            return css`
                min-width: max(400px, 30%);
            `;
        }
    }}
    flex: 1;
`;

const CardRow = (props) => {
    //resize cards to fill screen correctly
    const [scale, setScale] = useState();
    const [onCardResizeObserver] = useState(new ResizeObserver((entries)=>{
        entries.forEach((entry) => {
            setScale(Math.floor(entry.target.offsetWidth/5)*5);
        });
    }));
    //card isn't guaranteed to be on dom at first render, using callback instead of ref
    const cardMeasure = useCallback(node => {
        if (!node) return;
        onCardResizeObserver.disconnect();
        onCardResizeObserver.observe(node);
    }, [onCardResizeObserver]);

    const firstNonHidden = props.cards.reduce((acc, card, index)=> {
        return acc || (card.hidden?0:(index+1));
    },0) - 1;

    return(
        <CardDisplay>
            {(props.cards||[]).map((card, index)=>{
                return (
                    <CardEntry key={card.key} ref={index===firstNonHidden?cardMeasure:null} hidden={card.hidden}>
                        <Card {...card} width={scale}></Card>
                    </CardEntry>
                );
            })}
            <CardEntry/>
            <CardEntry/>
            <CardEntry/>
        </CardDisplay>
    );
};

export default CardRow;