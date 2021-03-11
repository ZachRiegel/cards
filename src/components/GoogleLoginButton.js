import React, {useContext} from 'react'
import FirebaseContext from 'contexts/FirebaseContext'

import styled, {css} from 'styled-components'


import googleIcon from 'images/branding/Google__G__Logo.svg'

const OuterShell = styled.div`
	height: 40px;
	padding-left: 8px;
	padding-right: 8px;
	font-size: 14px;
	font-family: 'Roboto', serif;
	width: min-content;
	display: flex;
	align-items: center;
	white-space: nowrap;
	border: 1px solid #d3d3d3;
	border-radius: 5px;
	&:hover {
		background-color: #f3f3f3;
	}
	&:active {
		background-color: #e7e7e7;
	}
	user-select: none;
	box-shadow: 0 1px 2px rgba(0,0,0,0.19), 0 1px 1px rgba(0,0,0,0.23);
`;

const GoogleIcon = styled.div`
	display: inline-block;
	width: 18px;
	height: 18px;
	margin-right: 24px;
	background-image: url(${googleIcon});
`;

const Text = styled.div`
	display: inline-block;
	white-space: no-space;
`

let GoogleLoginButton = () => {
	let firebase = useContext(FirebaseContext);

	return(
		<OuterShell onClick={firebase.signInWithPopup}>
			<GoogleIcon/><Text>Sign in with Google</Text>
		</OuterShell>
	);
}

export default GoogleLoginButton;