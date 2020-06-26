import React from 'react'
import styled, {css} from 'styled-components'

const OverlayContainer = styled.div`
	position: fixed;
	top:0;
	right:0;
	left:0;
	bottom:0;
	background-color: rgba(0,0,0,0);
	border: 0;
	margin:0;
	pointer-events:none;
	z-index: 2;
`;

class UIOverlay extends React.Component{
	render(){
		return(
			<OverlayContainer>
				{this.props.children}
			</OverlayContainer>
		);
	}
}

export default UIOverlay;