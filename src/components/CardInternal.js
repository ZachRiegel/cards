import React, {useState} from 'react'

import styled, {css} from 'styled-components'

import ImageLoader from 'components/ImageLoader'
import Icon from 'components/Icon'

const CardContainer = styled.div`
	border-radius: 20px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translateX(-50%) translateY(-50%);
	padding: 32px;
	width: 1400px;
	height: 1000px;
	margin: 0;
	box-shadow: 10px 10px 25px 15px #777;
	${props => css`
		background-image: linear-gradient(to right, ${props.backgroundColor1} 35%, ${props.backgroundColor2} 50%, ${props.backgroundColor3} 65%);
	`}
`;

const CardBorder = styled.div`
	position: absolute;
	top: -2px;
	left: -2px;
	right: -2px;
	bottom: -2px;
	z-index: 5;
	border-radius: 20px;
	border: 4px solid #000000;
	background-color: transparent;
`;

const CardHeader = styled.div`
    overflow: hidden;
    position: absolute;
    top: 15px;
    left: 15px;
    right: 15px;
    z-index: 2;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
`;

const HeaderEntry = styled.div`
	padding: 8px;
	padding-right: 12px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	flex-wrap: none;
	white-space: nowrap;
	font-family: 'B612', serif;
	font-weight: 400;
	font-size: 32px;
	width: min-content;
	${props => css`
		background-color: ${props.textBarColor};
		${props.larger?'font-size:40px':''}
	`}
`;

const NameHeaderEntry = styled.div`
	flex: 1;
	padding: 8px;
	padding-left: 20px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	flex-wrap: none;
	white-space: nowrap;
	font-family: 'B612', serif;
	font-size: 40px;
	${props => css`
		background-color: ${props.textBarColor};
	`}
`;

const CardArt = styled.div`
	height: 100%;
	border: 4px solid #000000;
	border-radius: 20px;
	overflow: hidden;
`;

const CardText = styled.div`
	position: absolute;
	width: 85%;
	bottom: 32px;
	left: 50%;
	transform: translateX(-50%);
	text-align: wrap;
	border: 4px solid #000000;
	border-radius: 20px 20px 0 0;
	font-family: 'B612', serif;
	font-weight: 400;
	display:flex;
	flex-direction: column;
	background-color: rgba(255, 255, 255, .95);
`;

const CardTextLine = styled.div`
	width: 100%;
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	padding: 15px;
	overflow: hidden;
	line-height: 36px;
	&:first-child {
		border-radius: 10px 10px 0 0;
	}
	&:nth-child(even) {
		background-color: rgba(0, 0, 0, .1);
	}
	&:first-child:last-child {
		justify-content: start;
	}
`;

const CardIconBackdrop = styled.div`
	width: min-content;
	border-radius: 20px;
	border: 4px solid #000000;
	overflow: hidden;
	display: grid;
	grid-template-columns: repeat(2, min-content);
	grid-column-gap: 4px;
	background-color: #000000;
	${props => css`
			${!props.noAbsolute?`position: absolute; right: 15px; bottom: 15px;`:''}
	`}
`;

const CostMarker = styled.div`
    width: 280px;
    height: 136px;
    border: 4px solid #000000;
    border-radius: 20px;
    position: relative;
    z-index: 5;
    background-color: #f2f2f2;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
		font-family: 'B612', serif;
		font-size: 48px;
`

const HeaderRowContainer = styled.div`
	flex: 1;
    display: grid;
    grid-template-columns: minmax(min-content, 1fr) min-content min-content;
    grid-column-gap: 4px;
    background-color: #000000;
    align-items: stretch;
    width: 100%;
    position: relative;
    z-index: 2;
    border: 4px solid #000000;
    border-left: 0;
    margin-left: -8px;
    padding-left: 8px;
    border-radius: 0 20px 20px 0;
    overflow: hidden;
`;

const RangeContainer = styled.div`
	font-family: 'B612', serif;
	padding: 8px;
	margin-right: 0px;
	flex: 1;
	text-align: center;
`;

const Spacer = styled.div`
	width: 12px;
`;

const getColors = (name) => {
	switch (name) {
		case 'red':
			return {
				backgroundColor1: '#770000',
				backgroundColor2: '#770000',
				backgroundColor3: '#770000',
			};
		case 'white':
			return {
				backgroundColor1: '#eeeeee',
				backgroundColor2: '#eeeeee',
				backgroundColor3: '#eeeeee',
			}
		case 'blue':
			return {
				backgroundColor1: '#334477',
				backgroundColor2: '#334477',
				backgroundColor3: '#334477',
			};
		case 'green':
			return {
				backgroundColor1: '#0c623f',
				backgroundColor2: '#0c623f',
				backgroundColor3: '#0c623f',
			};
		default: //brown
			return {
				backgroundColor1: '#885533',
				backgroundColor2: '#885533',
				backgroundColor3: '#885533',
			};
	}
};

const createCostIcons = (iconDict) => {
	if (!iconDict) iconDict={};
	let icons = [];
	switch(iconDict.any) {
		case 0 : {
			icons.push(<Icon key="0" name="zeroCard"/>);
			break;
		}
		case 1: {
			icons.push(<Icon key="0" name="oneCard"/>);
			break;
		}
		case 2: {
			icons.push(<Icon key="0" name="twoCard"/>);
			break;
		}
		default: {}
	};
	Object.keys(iconDict).forEach((key, index)=>{
		if (key==='any') return;
		for(let value = iconDict[key]; value > 0; value-=1) {
			icons.push(<Icon key={index+1} name={key} border/>);
		}
	});
	return icons;
};

const createIcons = (iconNames) => {
	let icons = [];
	if (!iconNames) return [];
	iconNames.forEach((value, index)=>{
		icons.push(<Icon key={index} name={value} border/>);
	});
	return icons;
};

const getBarColor = (name) => {
	switch(name) {
		default:
			return '#f2f2f2';
	}
};

const createLargeIcons = (iconNames) => {
	let icons = [];
	if (!iconNames) return [];
	iconNames.forEach((value, index)=>{
		icons.push(<Icon key={index} name={value} large border/>);
	});
	return icons;
};

const createRequirements = (iconNames) => {
	let icons = [];
	if (!iconNames) return [];
	Object.keys(iconNames).forEach((key, index)=>{
		icons.push(<span key={key} style={{fontSize: '32px', marginRight: '-4px'}}>{iconNames[key]}&nbsp;</span>, <Icon key={key+'Icon'} small name={key} border/>)
		if (index !== (Object.keys(iconNames).length-1)) icons.push(<Spacer key={key+'Spacer'}/>);
	});
	return icons;
};

const generateBody = (body) => {
	if (!body) return [];
	return body.map((row)=>{
		return row.split(/(@[^\s]*)|(__.*?__)/g).filter(entry=>entry).map((entry, index)=>{
			if (entry.match(/^@.*$/g)) {
				return(<span key={index} style={{fontSize: '28px'}}>&nbsp;<Icon small name={entry.replace(/^@/,'')} border/>&nbsp;</span>);
			}
			else if (entry.match(/(__.*?__)/g)) {
				return(<span key={index} style={{fontWeight: '600', fontSize: '32px'}}>{entry.replace(/__/g,'')}</span>);
			}
			else {
				return(<span key={index} style={{fontSize: '28px'}}>{entry}</span>);
			};
		});
	});
};

const CardInternal = React.memo((props) => {
	const [cardColors] = useState(getColors(props.color));
	cardColors.textBarColor = getBarColor(props.barColor);
	return(
		<CardContainer {...cardColors}>
			<CardBorder/>
			<CardArt {...cardColors}>
				<ImageLoader name={props.artName} tags={createLargeIcons(props.tags)}>
				</ImageLoader>
			</CardArt>
			<CardHeader {...cardColors}>
				<CostMarker>
					{createCostIcons(props.cost)}
				</CostMarker>
				<HeaderRowContainer>
					<NameHeaderEntry {...cardColors}>
						{props.name || 'Untitled Card'}
					</NameHeaderEntry>
					<HeaderEntry larger {...cardColors}>
						<Icon name="range"/>
						<Spacer/>
						<RangeContainer>
							{props.range}
						</RangeContainer>
					</HeaderEntry>
					<HeaderEntry larger {...cardColors}>
						<Icon name="tag"/>
						<Spacer/>
						{createIcons(props.tags)}
					</HeaderEntry>
				</HeaderRowContainer>
			</CardHeader>
			<CardText>
				{generateBody(props.body).map((entry, index) => {
					if (index === props.body.length-1) {
						return(
							<CardTextLine key={index}>
								<div>
									{entry.map((bit, index)=>{
										return bit;
									})}
									<div style={{overflow: 'hidden', verticalAlign: 'middle', visibility: 'hidden', display: 'inline-block', height: '52px', marginRight: '-106px'}}>
										<CardIconBackdrop {...cardColors} noAbsolute>
											<HeaderEntry {...cardColors}>
												<Icon small name='lock'/>
												<Spacer/>
												{createRequirements(props.requirements)}
											</HeaderEntry>
											<HeaderEntry {...cardColors}>
												<Icon small name="cardCopies"/>
												<Spacer/>
												{props.maxCopies}
											</HeaderEntry>
										</CardIconBackdrop>
									</div>
								</div>
							</CardTextLine>
						);
					}
					else {
						return(
							<CardTextLine key={index}>
								<div>
									{entry.map((bit, index)=>{
										return bit;
									})}
								</div>
							</CardTextLine>
						);
					}
				})}
			</CardText>
			<CardIconBackdrop {...cardColors}>
				<HeaderEntry {...cardColors}>
					<Icon small name='lock'/>
					<Spacer/>
					{createRequirements(props.requirements)}
				</HeaderEntry>
				<HeaderEntry {...cardColors}>
					<Icon small name="cardCopies"/>
					<Spacer/>
					{props.maxCopies}
				</HeaderEntry>
			</CardIconBackdrop>
		</CardContainer>
	);
}, (prev, next)=>{
    return JSON.stringify(prev) === JSON.stringify(next);
});

export default CardInternal;