import React from 'react'

import styled from 'styled-components'

const ImageContainer = styled.div`
	background-image: url(${props => props.src || ''});
	position:relative;
	background-size: cover;
	width: 100%;
	height: 100%;
`;

const GreyPaperSplash = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #bbbbbb;
`;

class Icon extends React.PureComponent {
	state = {};

	componentDidMount() {
		if (this.props.name) {
			let image;
			try {
				image = require(`images/${this.props.name}.jpg`);
			} catch(error){}
			this.setState({
				src: image,
			});
		}
	}

	render() {
		return(
			<div style={{width: '100%', height: '100%'}}>
				{
					this.state.src
						? <ImageContainer src={this.state.src}></ImageContainer>
						: <GreyPaperSplash>{this.props.tags}</GreyPaperSplash>
				}
			</div>
		);
	}
}

export default Icon;