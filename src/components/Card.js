import React, {useState, useEffect, useCallback} from 'react'

import styled from 'styled-components'

import CardInternal from 'components/CardInternal'

const Scaling = styled.div.attrs(props => ({
	style: {transform: `scale(${props.scale||1})`},
}))`
	padding-bottom: 72%;
	position: relative;
	image-rendering: -webkit-optimize-contrast;
`;

const Card = React.memo((props) => {
	const [scale, setScale] = useState(.3);
	const [cardProps, setCardProps] = useState();

	//resize cards to fill screen correctly
    const [onCardResizeObserver] = useState(new ResizeObserver((entries)=>{
        entries.forEach((entry) => {
            setScale(Math.floor(entry.target.offsetWidth/5)*5/1400);
        });
    }));
    //card isn't guaranteed to be on dom at first render, using callback instead of ref
    const cardMeasure = useCallback(node => {
        if (!node) return;
        onCardResizeObserver.disconnect();
        onCardResizeObserver.observe(node);
    }, [onCardResizeObserver]);

	useEffect(()=>{
		if (props.scale) {
			setScale(props.scale);
		}
		else if (props.width) {
			setScale(props.width/1400);
		}

		let newCardProps = {...props};
		delete newCardProps.scale;
		delete newCardProps.hidden;
		delete newCardProps.width;
		setCardProps(newCardProps);
	}, [props]);

	return(
		<div style={{width: '100%', height: '100%'}} ref={props.noAutoScaling?undefined:cardMeasure}>
			<Scaling scale={scale}>
				{cardProps?<CardInternal {...cardProps}/>:null}
			</Scaling>
		</div>
	);
});

export default Card;