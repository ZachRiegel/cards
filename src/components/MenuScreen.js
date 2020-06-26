import React from 'react'
import ReactDOM from 'react-dom'

import styled, {css} from 'styled-components'

import FirebaseContext from 'contexts/FirebaseContext'

import Card from 'components/Card'

import GoogleLoginButton from 'components/GoogleLoginButton'
import SentenceLookup from 'components/SentenceLookup'
import LoginIndicator from 'components/LoginIndicator'
import ViewStabilizer from 'components/ViewStabilizer'
import UIOverlay from 'components/UIOverlay'

const VerticalContainer = styled.div`
			display: flex;
			flex-direction: column;
			align-items: center;
		`;
const TopBar = styled.div`
	display: flex;
	justify-content: flex-end;
	width:100%;
	flex: none;
	align-items: center;
`;
const LoginMenu = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const TitleSplash = styled.div``;
const MenuContainer = styled.div`
	pointer-events: auto;
`;
const MenuText = styled.div`
	font-weight: 500;
`;
const TestBox = styled.div`
	width:100vh;
	height:100vh;
	background-color:tomato;
	&:hover{
		background-color:blue;
	}
`;

class MenuScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			displayLoginMenu: false,
		};
	}

	showLoginMenu = () => {
		this.setState({
			displayLoginMenu: true,
		});
	}

	render(){
		return (
			<div>
				<UIOverlay>
					<VerticalContainer>
						<TopBar>
							<LoginIndicator/>
						</TopBar>
						<TitleSplash>
							Eldtimes
						</TitleSplash>
						<MenuContainer>
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
						</MenuContainer>
					</VerticalContainer>
				</UIOverlay>
				<ViewStabilizer>
					<TestBox/>
				</ViewStabilizer>
			</div>
		);
	}
}

export default MenuScreen;