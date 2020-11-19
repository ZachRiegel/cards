import React, {useState, useContext, useEffect, useRef, useCallback} from 'react'

import styled, {css} from 'styled-components'

import CardZone from 'components/CardZone'

const HiddenCardZone = (props) => {
    const [deckContents, setDeckContents] = useState({});
    const [displayText, setDisplayText] = useState('');
    const _lastChosenCard = useRef();
    const ingestDeck = useCallback((deck) => {
        const lineRegex = /^\s*(\d+)x ([\w\s_:/']+)$/;
        let newDeck = {};
        ((deck?.split && deck.split(/\n/g)) || []).forEach((line) => {
            if(line?.match(lineRegex)) {
                let [match, count, name] = ((x) => x?.map(y => y.trim()) || [])((line)?.match(lineRegex));
                newDeck[name] = (newDeck[name] || 0) + Number(count);
                setDeckContents(newDeck);
            }
        });
        return newDeck;
    });
    const exportDeck = useCallback((deck) => {
        return Object.entries(deck||{})
            .sort((a, b) => a[0].localeCompare(b[0]))
            .reduce((acc, [name, count]) => {
                return acc + `${count}x ${name}\n`;
            }, '');
    });
    const cardsInDeck = useCallback((deck, name) => {
        return Object.entries(deck || {})
            .filter(([key, count]) => !name || name===key)
            .reduce((acc, [key, count]) => acc+count, 0);
    });

    const randomCard = useCallback((deck) => {
        let index = Math.floor(Math.random()*cardsInDeck(deck || {})) + 1;
        for (const [name, count] of Object.entries(deck || {})) {
            index-=count;
            if (index<=0) return name;
        }
        return 'Unknown Card';
    });

    useEffect(() => {
        setDeckContents(ingestDeck(props.value));
    }, [props.value]);

    useEffect(() => {
        setDisplayText(cardsInDeck(deckContents)
            ? `${cardsInDeck(deckContents)}x Cards`
            : ''
        );
    }, [deckContents]);

    const getNextCard=useCallback(() => {
        let card = randomCard(deckContents);
        _lastChosenCard.current = card;
        return card;
    }, [deckContents, _lastChosenCard]);

    const returnCard=useCallback(() => {
        _lastChosenCard.current = null;
    }, [_lastChosenCard]);

    const managedValueChange=useCallback((newValue, usedCard) => {
        let oldDeck = {...deckContents};
        let newDeck = ingestDeck(newValue);

        //If we have a card chosen, remove a copy of it
        if (_lastChosenCard.current) {
            oldDeck[_lastChosenCard.current]-=1;
            if (!oldDeck[_lastChosenCard.current]) delete oldDeck[_lastChosenCard.current];
            _lastChosenCard.current = null;
        }

        //Remove random cards to make up difference in expected deck size
        while(cardsInDeck(oldDeck) - cardsInDeck(newDeck, 'Cards') > 0) {
            let card = randomCard(oldDeck);
            if (oldDeck?.[card]) oldDeck[card]-=1;
            if (oldDeck[card]===0) delete oldDeck[card];
        }
        //Add any newly found cards
        Object.entries(newDeck).forEach(([name, count]) => name!=='Cards' && (oldDeck[name]=(oldDeck[name] || 0) + count));
        setDeckContents(oldDeck);
        console.log(oldDeck);
        if (props.valueChange) props.valueChange(exportDeck(oldDeck));
    }, [deckContents, _lastChosenCard, setDeckContents, props]);

    return (
        <CardZone value={displayText}
                  cards={props.cards}
                  zone={props.zone}
                  name={props.name}
                  cardInspection={props.cardInspection}
                  valueChange={managedValueChange}
                  getNextCard={getNextCard}
                  returnCard={returnCard}
          />
    );
};

export default HiddenCardZone;