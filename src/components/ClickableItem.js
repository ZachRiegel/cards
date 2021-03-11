import React, {
   useState,
   useCallback,
   useRef,
} from "react";
import styled, {css, keyframes} from "styled-components";
import FadeBetween from './FadeBetween'
import AnimatedContainer from './AnimatedContainer'
import TransitionWidth from './TransitionWidth'

import Locked from 'images/icons/locked.svg'

const Shell = styled.div`
   font-family: "B612", serif;
   font-size: 22px;
   margin: 8px;
   padding: 6px;
   padding-right: 15px;
   border-radius: 1.5em;
   display: flex;
   flex-direction: row;
   align-items: center;
   ${props => props.selected
      ? css`
         padding-left: 10px;
         font-size: 24px;
      `
      : null
   }
   ${props => props.disabled
      ? css`
         background-color: #e7e7e7;
      `
      : css`
         &:hover {
            background-color: #f3f3f3;
         }
         &:active {
            background-color: #e7e7e7;
         }
      `
   }
   transition:
      padding 500ms ease,
      font-size 500ms ease,
      background-color 200ms linear;
	user-select: none;
   position: relative;
   ${props => props.asButton
      ? css`
         border: 2px solid black;
      `
      : null
   }
`;

const wobble = keyframes`
   0% {
      left: 50%;
   }
   16.66% {
      left: 40%;
   }
   66.66% {
      left: 70%;
   }
   100% {
      left: 50%;
   }
`;

const IconInner = styled.div`
   &::before{
      position:absolute;
      top: 50%;
      transform:translateY(-50%);
      right: 49.5%;
      border-right: 6px solid black;
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      content:"";
      transition: border-right 500ms ease;
      ${props => props.selected
         ? css`
            border-right: 0px solid black;
         `
         :null
      }
   }
   &::after{
      position:absolute;
      z-index: 2;
      top: 50%;
      left: 49.5%;
      transform: translateY(-50%);
      border-left: 6px solid black;
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      content:"";
      ${props => props.selected
         ? css`
            border-left-width: 10px;
            border-top-width: 10px;
            border-bottom-width: 10px;
            animation: ${wobble} 1.75s linear infinite;
         `
         :null
      }
      transition: left 500ms ease;
      transition: border-width 500ms ease;
   }
`;

const Icon = styled.div`
   width: 18px;
   height: 18px;
   position: relative;
   z-index: 1;
   &::after{
      content:"";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 12px;
      height: 12px;
      transform: translateX(-50%) translateY(-50%) rotate(45deg);
      background-color: transparent;
      border: 2px solid transparent;
      transition: border-color 500ms ease, width 500ms ease, height 500ms ease;
      ${props => props.selected
         ? css`
            border-color: #c7c7c7 !important;
            width: 13px;
            height: 13px;
         `
         :null
      }
   }
   ${Shell}:hover &::after {
      border-color: black;
   }
`;

const LockedIcon = styled.div`
   width: 18px;
   height: 18px;
   background-position: center;
   background-size: 18px 18px;
   background-image: url(${Locked});
`;

const ClickableItem = (props) => {
   let {selected, click, asButton, iconName, disabled} = props;
   let renderIcon = useCallback((iconName='default') => {
      switch(iconName) {
         case 'locked':
            return (<LockedIcon/>);
         case 'default':
            return (
               <Icon selected={props.selected}>
                  <IconInner selected={props.selected}/>
               </Icon>
            );
         default:
            return (
               <Icon selected={props.selected}>
                  <IconInner selected={props.selected}/>
               </Icon>
            );
      }
   }, [props]);

   iconName = disabled ? 'locked' : iconName;

	return (
		<Shell
         {...{selected, asButton, disabled,}}
         onClick={((!disabled ? click : undefined) || (x=>x))}
         >
         <div style={{
            width: '18px',
            height: '18px',
            marginRight: '10px',
            marginLeft: '6px'
         }}>
            <FadeBetween animationKey={iconName||'default'}>
               <AnimatedContainer>
                  {renderIcon(iconName)}
               </AnimatedContainer>
            </FadeBetween>
         </div>
         {props.animateChange
            ? <TransitionWidth>
               <FadeBetween animationKey={props.animationKey}>
                  <AnimatedContainer>
                        <div style={{
                           textDecoration: selected?'underline #c7c7c7':'none',
                           transition: 'text-decoration-color 300ms'
                        }}>
                           {props.children}
                        </div>
                  </AnimatedContainer>
               </FadeBetween>
            </TransitionWidth>
            : <div style={{
               textDecoration: selected?'underline #c7c7c7':'underline transparent',
               transition: 'text-decoration-color 300ms'
            }}>
               {props.children}
            </div>
         }
      </Shell>
	);
};

export default ClickableItem;
