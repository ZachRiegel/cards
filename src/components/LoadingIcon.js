import React from 'react'
import styled, {css, keyframes} from 'styled-components'
import AnimatedContainer from './AnimatedContainer'
import CenterElements from './CenterElements'
import Header from './Header'

const RingAnimation1 = keyframes`
   0% {
      transform: rotate(90deg);
   }
   50% {
      transform: rotate(360deg);
   }
   83.3% {
      transform: rotate(360deg);
   }
   100% {
      transform: rotate(450deg);
   }
`;
const RingAnimation2 = keyframes`
   0% {
      transform: rotate(180deg);
   }
   33.3% {
      transform: rotate(360deg);
   }
   66.6% {
      transform: rotate(360deg);
   }
   100% {
      transform: rotate(540deg);
   }
`;
const RingAnimation3 = keyframes`
   0% {
      transform: rotate(270deg);
   }
   16.6% {
      transform: rotate(360deg);
   }
   50%{
      transform: rotate(360deg);
   }
   100% {
      transform: rotate(630deg);
   }
`;
const RingAnimation4 = keyframes`
   0% {
      transform: rotate(0deg);
   }
   66.6%{
      transform: rotate(360deg);
   }
   100% {
      transform: rotate(360deg);
   }
`;


const Ring = styled.div`
   display: inline-block;
   position: relative;
   width: 80px;
   height: 80px;
   & div{
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: 64px;
      height: 64px;
      margin: 8px;
      border: 6px solid #000;
      border-radius: 50%;
      border-color: #000 transparent transparent transparent;
   }
   & div:nth-child(1) {
      transform: rotate(90deg);
      animation: ${RingAnimation1} 1.5s linear infinite;
      animation-delay: -.1s;
   }
   & div:nth-child(2) {
      transform: rotate(180deg);
      animation: ${RingAnimation2} 1.5s linear infinite;
   }
   & div:nth-child(3) {
      transform: rotate(270deg);
      animation: ${RingAnimation3} 1.5s linear infinite;
      animation-delay: .1s;
   }
   & div:nth-child(4) {
      animation: ${RingAnimation4} 1.5s linear infinite;
      animation-delay: -.75s;
   }
   & span {
      position: absolute;
      top: 46%;
      left: 51%;
      display: block;
      width: 32px;
      height: 16px;
      transform: translateX(-50%) translateY(-50%) rotate(-45deg);
   }
   & span span {
      position: absolute;
      transform: rotate(0deg);
      top: 0;
      left: 0;
      border: 0px solid transparent;
      width: 0;
      height: 0;
      transition:
         height 300ms linear 1000ms,
         border-left 200ms linear 1100ms,
         width 300ms linear 1200ms,
         border-bottom 200ms linear 1300ms;
   }
`;
const FadeIn = keyframes`
   0% {
      opacity: 0;
   }
   100% {
      opacity: 1;
   }
`;
const TransitionWrapper = styled.div`
   animation: ${FadeIn} 600ms ease-in;
   &.fade-exit {
      & ${Ring} div{
         animation-iteration-count: 1 !important;
         border-color: black;
         transition: border-color 250ms ease-in 1.5s;
      }
      & ${Ring} span span{
         width:100%;
         height:100%;
         border-left: 5px solid black;
         border-bottom: 5px solid black;
      }
   }
   &.fade-exit-active {
      outline: 1px transparent;
      transition: outline 500ms ease-out 2s;
      & > div {
        opacity: 0;
        transition: opacity 500ms ease-out 2s;
     }
   }
`;



const LoadingIcon = () => {
   return (
      <TransitionWrapper>
         <Header>Loading</Header>
         <CenterElements>
            <Ring>
               <div/>
               <div/>
               <div/>
               <div/>
               <span><span/></span>
            </Ring>
         </CenterElements>
      </TransitionWrapper>
   );
}

export default LoadingIcon;
