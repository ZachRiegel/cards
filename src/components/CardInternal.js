import React, {useState, useEffect} from 'react'

import styled, {css} from 'styled-components'

import ImageLoader from 'components/ImageLoader'
import Icon from 'components/Icon'
import {createCostIcons} from 'components/CardUtilities'

const CardContainer = styled.div`
	border-radius: 20px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translateX(-50%) translateY(-50%);
	padding: 38px;
	width: 1400px;
	height: 1000px;
	margin: 0;
	${props => css`
		${props.hasShadow?'box-shadow: 10px 10px 25px 15px #777;':''}
	`}
`;

const CardBackgroundLeft = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	bottom: 0;
	width: 101px;
	z-index: -1;
	border-radius: 20px 0 0 20px;
	${props => css`
		background-color: ${props.backgroundColor1};
	`}
	&:after{
		left: calc(100% - 2px);
	    top: 0;
	    bottom: 0;
	    content: "";
	    position: absolute;
	    border-bottom: 1000px solid transparent;
		${props => css`
			border-left: 1200px solid ${props.backgroundColor1};
		`}
	}
`;

const CardSeparator = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	bottom: 0;
	width: 104px;
	z-index: -1;
	border-radius: 0 20px 20px 0;
	${props => css`
		background-color: ${props.backgroundColor1===props.backgroundColor2
				? props.backgroundColor1
				: '#000000'};
	`}
	&:after{
		right: calc(100% - 1px);
	    top: 0;
	    bottom: 0;
	    content: "";
	    position: absolute;
	    border-top: 1000px solid transparent;
		${props => css`
			border-right: 1200px solid ${props.backgroundColor1===props.backgroundColor2
				? props.backgroundColor1
				: '#000000'};
		`}
	}
`;

const CardBackgroundRight = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	bottom: 0;
	width: 99px;
	z-index: -1;
	border-radius: 0 20px 20px 0;
	${props => css`
		background-color: ${props.backgroundColor2};
	`}
	&:after{
		right: calc(100% - 2px);
	    top: 0;
	    bottom: 0;
	    content: "";
	    position: absolute;
	    border-top: 1000px solid transparent;
		${props => css`
			border-right: 1200px solid ${props.backgroundColor2};
		`}
	}
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
    top: 18px;
    left: 18px;
    right: 18px;
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
	bottom: 40px;
	left: 50%;
	transform: translateX(-50%);
	text-align: wrap;
	border: 4px solid #000000;
	border-bottom: 2px solid #000000;
	border-radius: 20px 20px 0 0;
	font-family: 'B612', serif;
	font-weight: 400;
	display:flex;
	flex-direction: column;
	background-color: rgba(255, 255, 255, .96);
`;

const CardTextLine = styled.div`
	width: 100%;
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	padding: 15px;
	overflow: hidden;
	line-height: 50px;
	&:first-child {
		border-radius: 10px 10px 0 0;
	}
	&:nth-child(2n) {
		background-color: rgba(0, 0, 0, .1);
	}
`;

const CardIconBackdrop = styled.div`
	width: min-content;
	border-radius: 20px;
	border: 4px solid #000000;
	overflow: hidden;
	display: grid;
	grid-column-gap: 4px;
	background-color: #000000;
	${props => css`
		${!props.noAbsolute?`position: absolute; right: 18px; bottom: 18px;`:''}
		grid-template-columns: repeat(${props.columnCount}, min-content);
	`}
`;

const CostMarker = styled.div`
    width: min-content;
    padding-left: 20px;
    padding-right: 20px;
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
    margin-left: -8px;
    padding-left: 8px;
    border-radius: 0 20px 20px 0;
    ${props => css`
		${props.cost ? `
			border-radius: 20px 20px 20px 20px;
		    margin-left: 0;
		    padding-left: 0;
		` : 'border-left: 0;'}
	`}
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
		case 'white':
			return {
				backgroundColor1: '#f7f7f7',
				backgroundColor2: '#f7f7f7',
			}
		case 'white/blue':
			return {
				backgroundColor1: '#f7f7f7',
				backgroundColor2: '#4466aa',
			}
		case 'white/red':
			return {
				backgroundColor1: '#f7f7f7',
				backgroundColor2: '#880000',
			}
		case 'white/green':
			return {
				backgroundColor1: '#f7f7f7',
				backgroundColor2: '#0c623f',
			}
		case 'blue':
			return {
				backgroundColor1: '#4466aa',
				backgroundColor2: '#4466aa',
			};
		case 'blue/green':
			return {
				backgroundColor1: '#4466aa',
				backgroundColor2: '#0c623f',
			};
		case 'blue/red':
			return {
				backgroundColor1: '#4466aa',
				backgroundColor2: '#880000',
			};
		case 'red':
			return {
				backgroundColor1: '#880000',
				backgroundColor2: '#880000',
			};
		case 'red/green':
			return {
				backgroundColor1: '#880000',
				backgroundColor2: '#0c623f',
			};
		case 'green':
			return {
				backgroundColor1: '#0c623f',
				backgroundColor2: '#0c623f',
			};
		case 'brown/white':
			return {
				backgroundColor1: '#5e3023',
				backgroundColor2: '#f7f7f7',
			};
		case 'brown/blue':
			return {
				backgroundColor1: '#5e3023',
				backgroundColor2: '#4466aa',
			};
		case 'brown/red':
			return {
				backgroundColor1: '#5e3023',
				backgroundColor2: '#880000',
			};
		case 'brown/green':
			return {
				backgroundColor1: '#5e3023',
				backgroundColor2: '#0c623f',
			};
		default: //brown
			return {
				backgroundColor1: '#5e3023',
				backgroundColor2: '#5e3023',
			};
	}
};



const createIcons = (iconNames) => {
	let icons = [];
	if (!iconNames) return [];
	iconNames.forEach((value, index)=>{
		icons.push(<Icon medium key={index} name={value} border/>);
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
	return body.map((row)=> {
		let newRow = row.split(/(\s?@[a-zA-Z]*\s?)|(__.*?__)|(:)|(‘)|(’)/g).filter(entry=>entry).map((entry, index)=>{
			if (entry.match(/@[a-zA-Z]*/g)) {
				return(<span key={index} style={{fontSize: '28px'}}>&nbsp;<Icon small name={entry.replace(/[^\w]/g,'')} border/>&nbsp;</span>);
			}
			else if (entry.match(/:/)) {
				return(<span key={index} style={{fontSize: '40px'}}>{entry}</span>);
			}
			else if (entry.match(/(‘)|(’)/)) {
				return(<span key={index} style={{fontSize: '36px',fontWeight: '500'}}>{entry}</span>);
			}
			else if (entry.match(/(__.*?__)/g)) {
				return(<span key={index} style={{fontWeight: '600', fontSize: '32px'}}>{entry.replace(/__/g,'')}</span>);
			}
			else {
				return(<span key={index} style={{fontSize: '28px'}}>{entry}</span>);
			};
		});

		newRow.isChild = row.match(/@child/);

		return newRow;
	});
};

const CardInternal = React.memo((props) => {
	const [cardColors] = useState(getColors(props.color));
	cardColors.textBarColor = getBarColor(props.barColor);
	return(
		<CardContainer {...cardColors} hasShadow={props.hasShadow}>
			<CardBackgroundLeft {...cardColors}/>
			<CardSeparator {...cardColors}/>
			<CardBackgroundRight {...cardColors}/>
			<CardBorder/>
			<CardArt {...cardColors}>
				<ImageLoader name={props.artName} tags={createLargeIcons(props.tags)}>
				</ImageLoader>
			</CardArt>
			<CardHeader {...cardColors}>
				{props.cost &&
					<CostMarker>
						{createCostIcons(props.cost)}
					</CostMarker>
				}
				<HeaderRowContainer cost={!props.cost}>
					<NameHeaderEntry {...cardColors}>
						{props.name || 'Untitled Card'}
					</NameHeaderEntry>
					<HeaderEntry larger {...cardColors}>
						<Icon medium name="range"/>
						<Spacer/>
						<RangeContainer>
							{props.range}
						</RangeContainer>
					</HeaderEntry>
					<HeaderEntry larger {...cardColors}>
						<Icon medium name="tag"/>
						<Spacer/>
						{createIcons(props.tags)}
					</HeaderEntry>
				</HeaderRowContainer>
			</CardHeader>
			<CardText>
				{generateBody(props.body).map((entry, index) => {
					if (index === props.body.length-1) {
						return(
							<CardTextLine key={index} child={entry.isChild}>
								<div>
									{entry.map((bit, index)=>{
										return bit;
									})}
									<div style={{overflow: 'hidden', verticalAlign: 'middle', visibility: 'hidden', display: 'inline-block', height: '1em', marginRight: '-102px'}}>
										<CardIconBackdrop {...cardColors} noAbsolute columnCount={props.requirements?'2':'1'}>
											{props.requirements 
												&& <HeaderEntry {...cardColors}>
													<Icon small name='lock'/>
													<Spacer/>
													{createRequirements(props.requirements)}
												</HeaderEntry>
											}
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
							<CardTextLine key={index} child={entry.isChild}>
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
			<CardIconBackdrop {...cardColors} columnCount={props.requirements?'2':'1'}>
				{props.requirements 
					&& <HeaderEntry {...cardColors}>
						<Icon small name='lock'/>
						<Spacer/>
						{createRequirements(props.requirements)}
					</HeaderEntry>
				}
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