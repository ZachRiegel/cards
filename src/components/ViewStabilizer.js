import React from 'react'
import styled, {css} from 'styled-components'

const Container = styled.div`
  resize: both;
  height: 100vh;
  width: 100vw;
  background-color: black;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border: 0;
  overflow:hidden;
`;
const Display = styled.div`
  resize: both;
  position: absolute;
  top: 50%;
  left:50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
  background-color: darkgrey;
  -webkit-backface-visibility: hidden;
  padding:0;
  margin:0;
  border:0;
  ${props =>
    props.aspect16_9 &&
    css`    
      width: 1920vh;
      height: 1080vh;
    `
  };
`;

class ViewStabilizer extends React.Component{
	constructor(props) {
		super(props);
		this.AppWindowContainer=React.createRef();
	    this.AppWindowDisplay=React.createRef();

	    //auto lightbox the rest of the app
	    this.resizeObserver = new ResizeObserver((elements) => {
	      for (let element of elements) {
	        let scale = Math.min(this.AppWindowContainer.current.offsetWidth/this.AppWindowDisplay.current.offsetWidth, this.AppWindowContainer.current.offsetHeight/this.AppWindowDisplay.current.offsetHeight);
	        this.AppWindowDisplay.current.style.transform=' translate(-50%, -50%) scale('+scale+')';
	      }
	    });
	}

	componentDidMount() {
		this.resizeObserver.observe(this.AppWindowContainer.current);
	}
	componentWillUnmount() {
		this.resizeObserver.disconnect();
	}



	render() {
		return (
			<Container ref={this.AppWindowContainer}>
				<Display ref={this.AppWindowDisplay} aspect16_9>
					{this.props.children}
				</Display>
			</Container>
		);
  }
}

export default ViewStabilizer;