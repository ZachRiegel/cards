import React, {useState, useContext, useEffect, useCallback} from 'react'

import styled, {css} from 'styled-components'

import FirebaseContext from 'contexts/FirebaseContext'

import TagSelector from 'components/TagSelector'
import CardRow from 'components/CardRow'
import Icon from 'components/Icon'

const Splash = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #e5e7e9;
	overflow: hidden;
	display: flex;
	flex-direction: column;
`;

const Cover = styled.div`
	height: 0px;
`;

const WidthLimiter = styled.div`
	position: relative;
	max-width: min(1600px, 90%);
	width: 100%;
	flex: 1;
	margin: 0 auto;
`;

const HeaderBar = styled.div`
	width: 100%;
	background-color: #f5f5f5;
	border-bottom: 1px solid #b3b3b3;
	display: flex;
	flex-direction: column;
	align-items: stretch;
	position: sticky;
	top: 0;
	z-index: 4;
	${props => {
		if (props.hasShadow) return css`
			 box-shadow: 0px 0px 10px 5px #333;
		`;
	}}
`;

const InputBar = styled.input`
	border: 0;
	outline: 0;
	margin-left: 5px;
	padding: 5px;
	color: white;
	background-color: transparent;
	font-size: 20px;

	&::placeholder {
		color: #e5e5e5;
	}
`;

const TagRow = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const tagLookup = {
	waterSkill: 'hydromancer',
	airSkill: 'aeromancer',
	earthSkill: 'geomancer',
	fireSkill: 'pyromancer',
	barbarianSkill: 'barbarian',
	legionnaireSkill: 'legionnaire',
	swashbucklerSkill: 'swashbuckler',
	marksmanSkill: 'marksman',
};

const CardFilterRow = styled.div`
	padding: 10px;
	border-bottom: 3px solid #00b4d8;
	flex: 1;
	background-color: black;
`;

const CardDisplayRow = styled.div`
	flex: 1;
	background-color: #e5e7e9;
`;

const IconFilterRow = styled.div`
	flex: 1;
	background-color: #f2f2f2;
`;

const CardSearch = () => {
	const firebase = useContext(FirebaseContext);

	const [cards, setCards] = useState([]);
	const [filteredCards, setFilteredCards] = useState([]);
	const [selectedTags, setSelectedTags] = useState({});
	const [filterText, setFilterText] = useState('');
	const [hasShadow, setHasShadow] = useState(false);

	//filter cards
	useEffect(() => {
		if(!cards) return;
		let newCards = JSON.parse(JSON.stringify(cards));
		newCards.forEach(card => card.hidden=false);

		let filters = [];

		if (filterText) {
			filters.push(...filterText.toLocaleLowerCase().split(/\s/g));
		}

		filters.push(...Object.keys(selectedTags)
			.filter(key => selectedTags[key])
			.map((key)=>(`t:${tagLookup[key]}`)));

		filters.forEach((filter) => {
			newCards.forEach(card => {
				card.hidden = !card.lookup.match(filter) || card.hidden;
			});
		});

		setFilteredCards(newCards);
	}, [cards, selectedTags, filterText]);

	//determine if shadow should be added to header bar
	const [shadowIntersectionObserver] = useState(new IntersectionObserver((entries)=>{
		entries.forEach((entry)=>{
			const coverBounds = entry.boundingClientRect;
			const viewportBounds = entry.rootBounds;
			
			if (
				coverBounds.bottom >= viewportBounds.top
			) setHasShadow(false);

			if (
				coverBounds.top < viewportBounds.top
				&& coverBounds.bottom < viewportBounds.bottom
			) setHasShadow(true);
		});
	}, {threshold: 1}));

	const coverRef = useCallback(node => {
		if (!node) return;
		shadowIntersectionObserver.disconnect();
		shadowIntersectionObserver.observe(node);
	}, [shadowIntersectionObserver]);
	
	const selectTag = (tag) => {
		Object.keys(selectedTags).forEach((key)=> {
			if (key!==tag) selectedTags[key]=false;
		});

		selectedTags[tag]=!selectedTags[tag];

		setSelectedTags({...selectedTags});
	};

	useEffect(()=>{
		firebase.database.ref('/Cards/').on('value', (snapshot) => {
			setCards(
				Object.entries(snapshot.val()).map(([key, card])=>{
					card.lookup = `
						|n:${card.name}
						|c:${((cost)=>{
							const abbreviationLookup = {
								waterSkill: 'h',
								airSkill: 'a',
								earthSkill: 'g',
								fireSkill: 'p',
								barbarianSkill: 'b',
								legionnaireSkill: 'l',
								swashbucklerSkill: 's',
								marksmanSkill: 'm',
							}
							let result='';
							if (!cost) cost={};
							if (cost.any!==undefined) result+=String(cost.any);
							
							Object.keys(cost).forEach((key, index)=>{
								if (key==='any') return;
								if (cost[key]) {
									result += abbreviationLookup[key] + String(cost[key]);
								}
							});
							return result;
						})(card.cost)}|
						|tags:${((tags)=>{
							if (!tags) return '';
							let result = '';
							tags.forEach((value, index)=>{
								result+=`[t:${tagLookup[value]}]`;
							});
							return result;
						})(card.tags)}
						|b:${((body)=>{
							if (!body) return '';
							return body.reduce((acc, line)=>{return acc+'\n'+line});
						})(card.body)}
						|
					`.replace(/\s/g,'').toLocaleLowerCase();
					card.key = key;
					return card;
				})
			);
		});
	}, [firebase]);

	return (
		<Splash>
			<div style={{flex: '1', position: 'relative', overflowY: 'auto', overflowX: 'hidden', display: 'flex', flexDirection: 'column'}}>
				<div style={{marginRight: 'calc(100% - 100vw)', display: 'flex', flexDirection: 'column', flex: '1'}}>
					<Cover ref={coverRef}/>
					<HeaderBar hasShadow={hasShadow}>
						<CardFilterRow>
							<WidthLimiter>
								<Icon name="search" smaller/>
								<InputBar type="text" placeholder='Search Cards' value={filterText} onChange={(event)=>{
									setFilterText(event.target.value);
								}}/>
							</WidthLimiter>
						</CardFilterRow>
						<IconFilterRow>
							<WidthLimiter>
								<TagRow>
									<TagSelector
										name="legionnaireSkill"
										onSelect={selectTag}
										selected={selectedTags}
									/>
									<TagSelector
										name="swashbucklerSkill"
										onSelect={selectTag}
										selected={selectedTags}
									/>
									<TagSelector
										name="barbarianSkill"
										onSelect={selectTag}
										selected={selectedTags}
									/>
									<TagSelector
										name="marksmanSkill"
										onSelect={selectTag}
										selected={selectedTags}
									/>
									<TagSelector
										name="airSkill"
										onSelect={selectTag}
										selected={selectedTags}
									/>
									<TagSelector
										name="waterSkill"
										onSelect={selectTag}
										selected={selectedTags}
									/>
									<TagSelector
										name="fireSkill"
										onSelect={selectTag}
										selected={selectedTags}
									/>
									<TagSelector
										name="earthSkill"
										onSelect={selectTag}
										selected={selectedTags}
									/>
								</TagRow>
							</WidthLimiter>
						</IconFilterRow>
					</HeaderBar>
					<CardDisplayRow>
						<WidthLimiter>
							<CardRow cards={filteredCards}/>
						</WidthLimiter>
					</CardDisplayRow>
				</div>
			</div>
		</Splash>
	);
};
export default CardSearch;