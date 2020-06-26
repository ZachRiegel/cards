import React from 'react'

import styled, {css} from 'styled-components'

import HexRange from 'images/icons/HexRange.svg'
import Tag from 'images/icons/tag.svg'
import CardCopies from 'images/icons/cardCopies.svg'
import Lock from 'images/icons/lock.svg'
import FireSkill from 'images/icons/fireSkill.svg'
import FireCard from 'images/icons/fireCard.svg'
import AirSkill from 'images/icons/airSkill.svg'
import AirCard from 'images/icons/airCard.svg'
import EarthSkill from 'images/icons/earthSkill.svg'
import EarthCard from 'images/icons/earthCard.svg'
import SwashbucklerSkill from 'images/icons/swashbucklerSkill.svg'
import BarbarianSkill from 'images/icons/barbarianSkill.svg'
import LegionnaireSkill from 'images/icons/legionnaireSkill.svg'
import MarksmanSkill from 'images/icons/marksmanSkill.svg'
import WaterSkill from 'images/icons/waterSkill.svg'
import WaterCard from 'images/icons/waterCard.svg'
import AttackIcon from 'images/icons/attack.svg'
import OneCard from 'images/icons/oneCard.svg'
import TwoCard from 'images/icons/twoCard.svg'
import ZeroCard from 'images/icons/zeroCard.svg'
import RangedAttack from 'images/icons/rangedAttack.svg'
import MeleeAttack from 'images/icons/meleeAttack.svg'
import Child from 'images/icons/child.svg'
import Option from 'images/icons/option.svg'
import SpellcastingModifier from 'images/icons/spellcastingModifier.svg'
import WeaponModifier from 'images/icons/weaponModifier.svg'
import Search from 'images/icons/search.svg'

const ElementIcon = styled.div`
	display: inline-block;
	background-image: url(${(props) => {
			switch(props.name) {
				case 'attack':
					return AttackIcon;
				case 'fire':
					return FireCard;
				case 'fireSkill':
					return FireSkill;
				case 'air':
					return AirCard;
				case 'airSkill':
					return AirSkill;
				case 'earth':
					return EarthCard;
				case 'earthSkill':
					return EarthSkill;
				case 'water':
					return WaterCard;
				case 'waterSkill':
					return WaterSkill;
				case 'swashbucklerSkill':
					return SwashbucklerSkill;
				case 'barbarianSkill':
					return BarbarianSkill;
				case 'legionnaireSkill':
					return LegionnaireSkill;
					case 'marksmanSkill':
					return MarksmanSkill;
				case 'oneCard':
					return OneCard;
				case 'twoCard':
					return TwoCard;
				case 'zeroCard':
					return ZeroCard;
				case 'rangedAttack':
					return RangedAttack;
				case 'meleeAttack':
					return MeleeAttack;
				case 'lock':
					return Lock;
				case 'range':
					return HexRange;
				case 'cardCopies':
					return CardCopies;
				case 'tag':
					return Tag;
				case 'child':
					return Child;
				case 'option':
					return Option;
				case 'spellcastingModifier':
					return SpellcastingModifier;
				case 'weaponModifier':
					return WeaponModifier;
				case 'search':
					return Search;
				default: {}
			}
		}
	});
	position:relative;
	width:80px;
	height:80px;
	background-size: cover;
	vertical-align: middle;
	${props => {
		if(props.smaller) {
			return css`
				width: 30px;
				height: 30px;
			`;
		}
		if(props.small) {
			return css`
				width: 56px;
				height: 56px;
				${props.name==='child'?'margin-left: 24px;':''}
			`;
		}
		if(props.large) {
			return css`
				width: 256px;
				height: 256px;
			`;
		}
		if(props.full) {
			return css`
				width: 100%;
				height: 0px;
				padding-bottom: 100%;
			`;
		}
	}}
`;

const Border = styled.div`
	position: absolute;
	top: 3%;
	left: 3%;
	right: 3%;
	bottom: 3%;
	margin: 0;
	border-radius: 100%;
	border: 3px solid black;
	${props => {
		if(props.small) {
			return css`
				border: 2px solid black;
			`;
		}
		if(props.large) {
			return css`
				border: 8px solid black;
			`;
		}
	}}
`;

const borders = {
	waterSkill: true,
	fireSkill: true,
	earthSkill: true,
	airSkill: true,
	barbarianSkill: true,
	legionnaireSkill: true,
	swashbucklerSkill: true,
	marksmanSkill: true,
	rangedAttack: true,
	meleeAttack: true,
}

const Icon = React.memo((props) => {
	return(
		<ElementIcon {...props}>
			{props.border
				? borders[props.name]
					? <Border {...props}/>
					: null
				:null
			}
		</ElementIcon>
	)
});

export default Icon;