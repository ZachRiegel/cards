import React from 'react'
import ReactDOM from 'react-dom'

import styled, {css} from 'styled-components'

import FirebaseContext from 'contexts/FirebaseContext'

import GoogleLoginButton from 'components/GoogleLoginButton'

import LoginIndicator from 'components/LoginIndicator'

import UIOverlay from 'components/UIOverlay'


const LoginMenu = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const MenuContainer = styled.div`
	pointer-events: auto;
`;
const MenuText = styled.div`
	font-weight: 500;
`;


const MenuScreen = () => {
	return (
		<FirebaseContext.Consumer>
			{firebase => {
				if (firebase.loggedIn) {
					// todo add main menu
					return 'logged in';
				}
				else {
					return( 
						<LoginMenu>
							<MenuText>Login with:</MenuText>
							<GoogleLoginButton/>
						</LoginMenu>
					);
				}
			}}
		</FirebaseContext.Consumer>
	);
}

export default MenuScreen;