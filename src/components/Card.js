import React, {useState, useEffect} from 'react'

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
		<Scaling scale={scale}>
			{cardProps?<CardInternal {...cardProps}/>:null}
		</Scaling>
	);
});

export default Card;