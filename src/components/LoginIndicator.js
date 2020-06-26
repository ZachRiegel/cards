import React from 'react'
import FirebaseContext from 'contexts/FirebaseContext'
import styled, {css} from 'styled-components'

class LoginIndicator extends React.Component {
	static contextType = FirebaseContext;

	constructor(props) {
		super(props);
	}

	render() {
		const Indicator= styled.div`
			background-color: darkgrey;
			border-left: 1vh solid tomato;
			border-bottom: 1vh solid tomato;
			padding: 10vh;
			${props => !props.loggedIn && css`padding-left:0; padding-right:0; border: none; width: 0; overflow:hidden;`}
		`;
		return(
			<Indicator loggedIn={this.context.loggedIn}>
				{(this.context.user&&this.context.user.displayName)||'Not Authenticated'}
			</Indicator>
		);
	}
}

export default LoginIndicator;