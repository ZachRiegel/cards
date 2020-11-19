import React from 'react'
import CardSearch from 'components/CardSearch'
import DeckTester from 'components/DeckTester'
import CardLoader from 'components/CardLoader'
import FireBase from 'components/FireBase.js'
import AnimateSwitch from 'components/AnimateSwitch.js'
import { AnimatePresence} from 'framer-motion'
import Page from 'components/Page'
import MenuScreen from 'components/MenuScreen'
import 'layout/App.css'
import {
  HashRouter,
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
        </FireBase>
      </div>
    </div>
  );
};

export default App;