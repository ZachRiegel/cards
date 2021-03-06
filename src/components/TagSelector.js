import React, {useCallback} from 'react'

import styled, {css} from 'styled-components'

import Icon from 'components/Icon'

const TagWrapper = styled.div`
    margin: 5px 10px 5px 10px;
    &:first-child {
        margin-left: 0;
    }
    &:last-child {
        margin-right: 0;
    }
`;

const TagContainer = styled.div`
    position: relative;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: min-content;
    align-items: center;
    justify-content: center;

    &:hover > div > span {
        border-color: #6495ed;
        background-color: #6495ed;
    }
    &:hover > span {
        color: #6495ed;
    }
    user-select: none;
`;

const TagIcon = styled.div`
    position: relative;
    min-width: 40px;
    max-width: 60px;
    width: 60px;
    flex: 1;
    z-index: 0;
    padding: 0;
    margin: 0;
`;

const TagText = styled.span`
    font-size: 11px;
    height: 11px;
    margin: 2px;
    position: relative;
    text-align: center;
    font-weight: 500;
    font-family: 'B612', seriff;
    color: grey;
     ${props => {
        if (props.selected) return css`
            color: black !important;
        `
    }}
`;

const TagRing = styled.span`
    position: absolute;
    top: 3%;
    left: 3%;
    right: 3%;
    bottom: 3%;
    border-radius: 100%;
    border: 3px solid transparent;
    background-color: transparent !important;
    ${props => props.selected
        ? css`
            border-color: transparent !important;
        `
        : null
    }
    z-index: 4;
    cursor: pointer;
`;

const displayNames = {
    waterSkill: 'Hydromancer',
    fireSkill: 'Pyromancer',
    earthSkill: 'Geomancer',
    airSkill: 'Aeromancer',
    barbarianSkill: 'Barbarian',
    legionnaireSkill: 'Legionnaire',
    marksmanSkill: 'Marksman',
    swashbucklerSkill: 'Swashbuckler',
}

const TagSelector = React.memo((props) => {
    const iconClicked = useCallback(()=>{
        if (props.onSelect) props.onSelect(props.name);
    }, [props]);
    return(
        <TagWrapper>
            <TagContainer onClick={iconClicked} selected={props.selected[props.name]}>
                <TagIcon>
                    <Icon border name={props.name} greyscale={!props.selected[props.name]} full/>
                    <TagRing selected={props.selected[props.name]}/>
                </TagIcon>
                <TagText selected={props.selected[props.name]}>
                    <span style={{position: 'absolute', top: '50%', left: '50%', transform: 'translateX(-50%) translateY(-50%)'}}>
                        {displayNames[props.name]}
                    </span>
                </TagText>
            </TagContainer>
        </TagWrapper>
    );
});

export default TagSelector;