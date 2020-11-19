import React, {useState, useEffect} from 'react'
import Icon from 'components/Icon'

const capitalizeFirst = (s) => {
  let newStart = s.match(/([a-zA-Z]+)/);
    if (!newStart) return;
    newStart = newStart[1].charAt(0).toLocaleUpperCase() + newStart[1].slice(1);
    return s.replace(/([a-zA-Z]+)/, newStart);
}

const createCostIcons = (iconDict, iconSize='') => {
	if (!iconDict) iconDict={};
	let size = {[iconSize]: true};
	let icons = [];
	switch(iconDict.any) {
		case 0 : {
			icons.push(<Icon key="0" name="zeroCard" {...size}/>);
			break;
		}
		case 1: {
			icons.push(<Icon key="0" name="oneCard" {...size}/>);
			break;
		}
		case 2: {
			icons.push(<Icon key="0" name="twoCard" {...size}/>);
			break;
		}
		default: {}
	};
	Object.keys(iconDict).forEach((key, index)=>{
		if (key==='any') return;
		for(let value = iconDict[key]; value > 0; value-=1) {
			icons.push(<Icon key={index+1} name={key} border {...size}/>);
		}
	});
	return icons;
};

const parseCardName = (key) => capitalizeFirst(key.split(/(?=[A-Z])/)
	.reduce((acc, val) => `${acc} ${capitalizeFirst(val)}`)
	.replace(/_s/g, ' /')
	.replace(/_c/g, ':')
	.replace(/_a/g, `'`));

export {createCostIcons, parseCardName};