import React from 'react'
import FirebaseContext from 'contexts/FirebaseContext'

import styled, {css} from 'styled-components'

import googleSignin from 'images/branding/btn_google_signin_light_normal_web@2x.png'

const GoogleButton = styled.div`
	background-size: contain;
	background-repeat: no-repeat;
	background-image: url(${() => {return googleSignin}});
	width: 100%;
	height: 0;
	padding-top: 24%;
	mask-image: url(${() => {return googleSignin}});
	mask-mode: alpha;
	mask-size: contain;
	mask-repeat: no-repeat;
	&:hover {
		background-color: #ddd;
		background-blend-mode: multiply;
	}
	&:active {
		background-color: #999;
		background-blend-mode: multiply;
	}
`;

class GoogleLoginButton extends React.Component {
	static contextType = FirebaseContext;

	constructor(props) {
		super(props);
		this.state = {
			burn: 0,
		};
	}

	setBurn = (burn) => {
		if(!burn||this.state.burn<burn) this.setState({
			burn: burn,
		});
	}

	render() {
		

		return (
			<GoogleButton src={googleSignin} onMouseDown={this.context.signInWithPopup}/>
		);
	};
}

export default GoogleLoginButton;