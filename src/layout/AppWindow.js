import React from 'react'
import CardSearch from 'components/CardSearch'
import FireBase from 'components/FireBase.js'
import 'layout/AppWindow.css'

class AppWindow extends React.Component {
  render() {
    return(
      <FireBase>
        <CardSearch></CardSearch>
      </FireBase>
    );
  }
}

export default AppWindow;