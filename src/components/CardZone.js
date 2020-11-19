import React, {useState, useContext, useEffect, useRef, useCallback} from 'react'

import styled, {css} from 'styled-components'

import {createCostIcons} from 'components/CardUtilities'
import Icon from 'components/Icon'

const Zone = styled.div`
	background-color: white;
	font-size: 1.1em;
	border-radius: 10px;
	border: 1px solid black;
	display: flex;
	flex-direction: column;
	justify-items: stretch;
	align-items: stretch;
	&:focus-within{
		border-color: blue;
	}
    ${props => css`
        grid-area: ${props.zone};
    `}
    flex-basis: 0;
`;

const ZoneHeader = styled.div`
	border-radius: 10px 10px 0 0;
	padding: 10px;
	padding-bottom: 0;
	font-size: 1.25em;
	font-weight: 600;
	text-decoration: underline;
`;

const ZoneInput = styled.div`
	background-color: white;
	resize: none;
	padding: 10px;
	font-size: 1em;
    line-height: 1.6em;
	color: black;
	border-radius: 0 0 10px 10px;
	border: 0;
	flex: 1;
	outline: none;
    font-family: 'B612', serif;
    min-height: 100%;
    height: min-content;
    width: 100%;
    position: relative;
    overflow-y: auto;
    white-space: pre;
    display:inline-block;
`;

const ZoneInputReadout = styled.div`
    resize: none;
    pointer-events: none;
    padding: 10px;
    font-size: 1em;
    line-height: 1.6em;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 0 0 10px 10px;
    width: 100%;
    outline: 0;
    border: 0;
    background-color: transparent;
    white-space: pre;
`;

const ZoneInputWrapper = styled.div`
    display: flex;
    flex-direction: col;
    position: relative;
    padding: 0;
    margin: 0;
    border: 0;
    flex: 1;
    justify-items: stretch;
    align-items: stretch;
    border-radius: 0 0 10px 10px;
    overflow-y: auto;
`;

const ZoneInputInnerWrapper = styled.div`
    position: relative;
    flex: 1;
    min-height: 100%;
`;

const CardDefinition = styled.div`
    color: black;
    font-weight: 600;
    border-bottom: 1px solid black;
    margin-bottom: -1px;
    &:first-child {
        margin-top: -1px;
        border-top: 1px solid black;
    }
    display: flex;
    direction: row;
    justify-content: space-between;
    width: 100%;
`

const FillerText = styled.div`
    & + .BorderAbove{
        border-top: 1px solid black;
        margin-top: -1px;
    }
`;

const ColoredText = styled.span`
    ${props => css`
        color: ${props.color || 'black'}
    `}
`;

const key = (()=>{
    let key=0;
    return () => ++key;
})();

const CardZone = (props) => {
    const inputRef = useRef();
    const [value, setValue] = useState();
    const [lastValue, setLastValue] = useState();
    const [drag, setDrag] = useState(false);
    const [highlight, setHighlight] = useState(true);
    const [valueReadout, setValueReadout] = useState();
    const findCardCost = useCallback((name) => {
        if (!props?.cards?.[name]) return;
        return createCostIcons(props.cards[name].cost, 'inline');
    }, [props]);
    const findCardColors = useCallback((name) => {
        if (!props?.cards?.[name]?.color?.split) return;
        let cardColorMarkers = props.cards[name].color.split(/\//g).reduce((acc, color) => {
            switch(color) {
                case 'blue':
                    acc.push(<ColoredText key={key()} color='blue'>u</ColoredText>);
                    break;
                case 'red':
                    acc.push(<ColoredText key={key()} color='red'>r</ColoredText>);
                    break;
                case 'green':
                    acc.push(<ColoredText key={key()} color='green'>e</ColoredText>);
                    break;
                case 'white':
                    acc.push(<ColoredText key={key()} color='gray'>a</ColoredText>);
                    break;
            }
            return acc;
        }, []);
        return(
            <span>
                {cardColorMarkers}
            </span>
        );
    }, [props]);

    const reformatInnerText = useCallback((val) => {
        let deckRegex = /((?:^\s*\d+x [\w _:/']+\s*)+)/g;
        return (val?.split?.(deckRegex) || []).map((section) => {
            if(section?.match(deckRegex)) return Object.entries(
                    section.trim().split(/\n/g).map((line => {
                        let [match, count, name] = ((x) => x?.map(y => y.trim()) || [])((line)?.match(/^\s*(\d+)x ([\w _:/']+)$/));
                        return [count, name];
                    })).reduce((acc, [count, name]) => {
                        if (acc[name]) acc[name] += Number(count);
                        else acc[name] = Number(count);
                        return acc;
                    }, {})
                ).sort(([name1, count1], [name2, count2]) => name1.localeCompare(name2))
                    .map(([name, count]) => `${count}x ${name}\n`)
                    .reduce((acc, val) => acc + val, '');
            else return section;
        }).reduce((acc, val) => acc + val, '');
    })

    const updateTextForValue = useCallback((val) => {
        inputRef.current.innerText=val;
        return val;
    }, [inputRef]);

    useEffect(()=>{
        setValue((value) => updateTextForValue(props.value));
    }, [props, setValue, updateTextForValue]);

    const removeCopyOf = useCallback((name) => {
        let count = value?.match(new RegExp(`(\\d+)x ${name}`))?.[1];
        let val =  reformatInnerText(value?.replace(
            new RegExp(`\\d+x ${name}.*\n?`),
            count-1
                ? `${count-1}x ${name}\n`
                : ''
        ));

        setValue(updateTextForValue(val));
        if (props.valueChange) props.valueChange(val);
    }, [value, setValue, props]);

    const addCopyOf = useCallback((name) => {
        let count = Number(value?.match(new RegExp(`(\\d+)x (${name})`))?.[1]);
        let val;
        if (count) val = value?.replace(new RegExp(`${count}x ${name}.*\n?`), `${count+1}x ${name}\n`);
        else val = ((value||'').trim() + `\n1x ${name}`).trim();
        val = reformatInnerText(val);
        
        setValue(updateTextForValue(val));
        if (props.valueChange) props.valueChange(val);
    }, [value, setValue, props]);

    useEffect(()=>{
        setValueReadout(!highlight
            ? null
            : (value||'').split(/\n/g).map(line => {
            let [match, count, name] = ((x) => x?.map(y => y.trim()) || [])((line)?.match(/(\d+)x ([\w _:/']+)$/));
            if(name) return(
                <CardDefinition className="BorderAbove" key={name} draggable
                    onDragStart={(event=> {
                        setDrag(true);
                        if (!props.getNextCard) event.dataTransfer.setData("name", name);
                        else event.dataTransfer.setData("name", props.getNextCard());
                    })}
                    onDragEnd={(event) => {
                        if (event.dataTransfer.dropEffect === 'none') {
                            if(props.returnCard) props.returnCard();
                            return;
                        }
                        removeCopyOf(name);
                        setDrag(false);
                    }}
                    onContextMenu={(event)=>{
                        if (props.cardInspection) props.cardInspection(name);
                        event.preventDefault();
                        event.stopPropagation();
                    }}>
                    <span>
                        <span>{count}x </span>
                        <span style={{pointerEvents: 'all', cursor: 'move'}}>{name}</span>
                        <span> {((val) => val && <span>({val})</span>)(findCardColors(name))}</span>
                    </span>
                    <span style={{pointerEvents: 'all', cursor: 'move', flex: '1'}}/>
                    <span style={{height: '0', pointerEvents: 'all', cursor: 'move'}}>
                        {findCardCost(name)}
                        <Icon name="dragHandle" inline/> 
                    </span>
                </CardDefinition>
            );
            else return(<FillerText key={key()}> </FillerText>);
        }));
    }, [value, props, highlight]);

    return (
        <Zone {...props}
            onDragOver={(event) => {
                if (!drag) {
                    event.dataTransfer.dropEffect = "move";
                    event.preventDefault();
                }
            }}
            onDrop={(event) => {
                addCopyOf(event.dataTransfer.getData("name"));
                event.preventDefault();
            }}
            onKeyDown={(event) => {
                if (event.keyCode == 27) document.activeElement.blur();
            }}
            onContextMenu={(event) => {
                document.activeElement.blur();
                event.stopPropagation();
                event.preventDefault();
            }}
        >
            <ZoneHeader onClick={(event) => {
                if(inputRef?.current) inputRef.current.focus();
            }}>
                {props.name}
            </ZoneHeader>
            <ZoneInputWrapper>
                <ZoneInputInnerWrapper>
                    <ZoneInput ref={inputRef} contentEditable spellcheck="false"
                        onFocus={(event) => setHighlight(false)}
                        onBlur={(event) => {
                            setValue(updateTextForValue(reformatInnerText(value)));
                            if (props.valueChange) props.valueChange(reformatInnerText(value));
                            setHighlight(true);
                        }}
                        onKeyUp={(event) => {
                            setValue(event.currentTarget.innerText)}}
                        >
                    </ZoneInput>
                    {highlight
                        ? <ZoneInputReadout>
                            {valueReadout}
                        </ZoneInputReadout>
                        : undefined
                    }
                </ZoneInputInnerWrapper>
            </ZoneInputWrapper>
        </Zone>
    );
};

export default CardZone;