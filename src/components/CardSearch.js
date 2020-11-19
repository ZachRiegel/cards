import React, {useState, useContext, useEffect, useCallback} from 'react'

import styled, {css} from 'styled-components'

import CardContext from 'contexts/CardContext'
import AnimationContext from 'contexts/AnimationContext'

import TagSelector from 'components/TagSelector'
import CardRow from 'components/CardRow'
import CardLoader from 'components/CardLoader'
import ScrollableSection from 'components/ScrollableSection'
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

const CardFilterRow = styled.div`
	padding: 10px;
	border-bottom: 3px solid #00b4d8;
	flex: 1;
	background-color: black;
`;

const CardDisplayRow = styled.div`
	flex: 1;
	background-color: #e2e6ea;
`;

const IconFilterRow = styled.div`
	flex: 1;
	background-color: #f2f2f2;
`;

const CardContextWrapper = (Comp) => (props) => {
	return (
		<CardLoader>
			<Comp {...props}/>
		</CardLoader>
	);
}

const tagLookup = {
  waterSkill: 'hydromancer',
  airSkill: 'aeromancer',
  earthSkill: 'geomancer',
  fireSkill: 'pyromancer',
  barbarianSkill: 'barbarian',
  legionnaireSkill: 'legionnaire',
  swashbucklerSkill: 'swashbuckler',
  marksmanSkill: 'marksman',
  meleeAttack: 'melee',
  rangedAttack: 'ranged',
};

const CardSearch = () => {
	const cardDefinitions = useContext(CardContext);
	const [cards, setCards] = useState([]);
	useEffect(() => {
		setCards(Object.values(cardDefinitions));
	}, [cardDefinitions]);
	const animation = useContext(AnimationContext);
	const [filteredCards, setFilteredCards] = useState([]);
	const [selectedTags, setSelectedTags] = useState({});
	const [filterText, setFilterText] = useState('');
	const [hasShadow, setHasShadow] = useState(false);

	//filter cards
	useEffect(() => {
		if(!cards) return;
		if(
			!animation
			|| !animation.completed
		) return;
		let newCards = JSON.parse(JSON.stringify(cards));
		newCards.forEach(card => card.hidden=false);

		let filters = [];

		if (filterText) {
			filters.push(...filterText.toLocaleLowerCase().split(/\s/g).map((val) => {
				try {
					return new RegExp(val);
				} catch(e) {
					return val;
				}
			}));
		}

		filters.push(...Object.keys(selectedTags)
			.filter(key => selectedTags[key])
			.map((key)=>(`t:${tagLookup[key]}`)));

		filters.forEach((filter) => {
			newCards.forEach(card => {
				try {
					card.hidden = !card.lookup.match(filter) || card.hidden;
				} catch(e) {
					card.hidden = false;
				}
			});
		});

		setFilteredCards(newCards);
	}, [cards, selectedTags, filterText, animation]);

	//determine if shadow should be added to header bar
	const [shadowIntersectionObserver] = useState(new IntersectionObserver((entries)=>{
		entries.forEach((entry)=>{
			const coverBounds = entry.boundingClientRect;
			const viewportBounds = entry.rootBounds;

			if(!coverBounds || !viewportBounds) return;
			
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

	const selectTag = useCallback((tag) => {
		let newTags = {...selectedTags};

		Object.keys(newTags).forEach((key)=> {
			if (key!==tag) newTags[key]=false;
		});

		newTags[tag]=!newTags[tag];

		setSelectedTags({...newTags});
	}, [selectedTags]);

	return (
		<Splash>
			<ScrollableSection>
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
			</ScrollableSection>
		</Splash>
	);
};

export default CardSearch;