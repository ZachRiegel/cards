import React from 'react'
import LandingPage from 'components/LandingPage.js'
import FireBase from 'components/FireBase.js'

import 'layout/App.css'
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

//handles routing and route-change related animations
const App = () => {
  return(
    <div>
      <div style={{width:'100vw', height: '100vh', backgroundColor: 'black'}}/>
      <div style={{position: 'absolute',top:0, width:'100vw', height: '100vh'}}>
         <FireBase>
            <BrowserRouter basename="/eldtimes">
               <Switch>
                  <Route path={['']}>
                     <LandingPage/>
                  </Route>
               </Switch>
            </BrowserRouter>
         </FireBase>
      </div>
    </div>
  );
};

/*<FireBase>
  <CardLoader>
    <HashRouter>
      <Switch>
        <Route exact path={['', '/cards']}>
          <AnimatePresence initial={true} exitBeforeEnter>
            <AnimateSwitch>
              <Page>
                <CardSearch/>
              </Page>
            </AnimateSwitch>
          </AnimatePresence>
        </Route>
        <Route exact path={'/decktester'}>
          <AnimatePresence initial={true} exitBeforeEnter>
            <AnimateSwitch>
              <Page>
                <DeckTester/>
              </Page>
            </AnimateSwitch>
          </AnimatePresence>
        </Route>
      </Switch>
    </HashRouter>
  </CardLoader>
</FireBase>*/

export default App;
