import React, {useState, useContext, useEffect, useCallback} from 'react'

import styled, {css} from 'styled-components'

import CardContext from 'contexts/CardContext'
import CardZone from 'components/CardZone'
import HiddenCardZone from 'components/HiddenCardZone'
import CardInspectionModal from 'components/CardInspectionModal'

const Splash = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #ffffff;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	font-family: 'B612', serif;
`;

const ZoneGrid = styled.div`
	padding: 20px;
	display: grid;
	gap: 30px;
	grid-template-areas: 
    "stats deck hand exile"
    "stats reserves hand exile"
    "stats misc buff yard"
    "stats misc buff yard";
    justify-items: stretch;
    align-items: stretch;
    width: 100%;
    height: 100%;
    max-height: 100vh;
    grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(0, 1fr));
`;

const Square = styled.div`
	background-color: rebeccapurple;
	${props => css`
		grid-area: ${props.area || ''};
	`}
`;

const DeckTester = () => {
	const cardDefinitions = useContext(CardContext);

	const [cards, setCards] = useState();

	const [inspectedCard, setInspectedCard] = useState();
	const [inspectedCardInfo, setInspectedCardInfo] = useState();

	useEffect(() => {
		if (!cardDefinitions) return;
		setCards(
			(Object.entries(cardDefinitions) || [])
				.map(([key, value]) => [value.name, value])
				.reduce((acc, [name, val]) => Object.assign(acc, {[name]: val}), {})
		);
	}, [cardDefinitions]);

	const [zones, setZones] = useState({
		stats: '',
		deck: '',
		reserves: '',
		hand: '',
		exile: '',
		misc: '',
		buff: '',
		yard: '',
	});

	const valueChange = useCallback((zone) => (value) =>{
		setZones((zones) => {
			let newZones = {...zones};
			newZones[zone] = value;
			return {...newZones};
		});
	}, [zones]);

	const openDetailModal = useCallback((cardName) => {
		setInspectedCard(cardName);
	}, []);

	const [zoneContent, setZoneContent] = useState();
	useEffect(() => {
		const createZone = (zone, name, type="card") => {
			switch(type) {
				case 'hidden':
					return (
						<HiddenCardZone zone={zone}
										name={name}
										key={name}
										value={zones[zone]}
										cards={cards}
										cardInspection={openDetailModal}
										valueChange={valueChange(zone)}
						/>
					);
				default:
					return (
						<CardZone zone={zone}
								  name={name}
								  key={name}
								  value={zones[zone]}
								  cards={cards}
								  cardInspection={openDetailModal}
								  valueChange={valueChange(zone)}
						/>
					);
			}
		};

		const zoneContentInfo = [
			['stats', 'Character Stats'],
			['deck', 'Deck', 'hidden'],
			['hand', 'Hand'],
			['exile', 'Exile'],
			['reserves', 'Reserves', 'hidden'],
			['misc', 'Miscellaneous'],
			['buff', 'Buff'],
			['yard', 'Graveyard'],
		];

		setZoneContent(zoneContentInfo.reduce((acc, value) => {
			acc.push(createZone(...value));
			return acc;
		}, []));
	}, [cards, zones, openDetailModal, valueChange]);

	return (
		<Splash>
			<CardInspectionModal cards={cards} inspectedCard={inspectedCard} setInspectedCard={setInspectedCard}/>
			<ZoneGrid onClick={(event)=>{
				event.preventDefault();
			}}>
				{zoneContent}
			</ZoneGrid>
		</Splash>
	);
};

export default DeckTester;