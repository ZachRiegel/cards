import React, {useContext, useState, useCallback, useEffect} from 'react'
import FirebaseContext from 'contexts/FirebaseContext'
import Page from './Page'
import CenterElements from './CenterElements'
import ContentBox from './ContentBox'

import GoogleLoginButton from './GoogleLoginButton'

import FadeBetween from './FadeBetween'
import AnimatedContainer from './AnimatedContainer'
import Header from './Header'
import CharactersMenu, {CharactersMenuHints} from './CharactersMenu'
import CharacterCreationMenu from './CharacterCreationMenu'

import Hints from './Hints'

import ClickableItem from './ClickableItem'
import Row from './Row'

import {
  Switch,
  Route,
  useRouteMatch,
  useLocation,
  useHistory
} from "react-router-dom";
import useRouting from './useRouting'

const LandingPage = () => {
   let firebase = useContext(FirebaseContext);
   const {location, nextPath} = useRouting();
   const history = useHistory();

   return(
      <Page>
         <CenterElements>
            <ContentBox>
               <Hints>
                  <CharactersMenuHints/>
                  <FadeBetween animationKey={firebase.loggedIn}>
                     {!firebase.loggedIn
                        ?	<AnimatedContainer>
                           <Header>
                              Log In
                           </Header>
                           <CenterElements>
                              <GoogleLoginButton/>
                           </CenterElements>
                        </AnimatedContainer>
                        :	<AnimatedContainer>
                           <FadeBetween animationKey={nextPath}>
                              <Switch location={location}>
                                 <Route exact path={['/', '/main']}>
                                    <AnimatedContainer>
                                       <Header>
                                          Main Menu
                                       </Header>
                                       <ClickableItem>My Campaigns</ClickableItem>
                                       <ClickableItem click={()=> history.push('/characters')}>
                                          My Characters
                                       </ClickableItem>
                                       <ClickableItem>Card Browser</ClickableItem>
                                       <div style={{height:'20px'}}/>
                                       <CenterElements>
                                          <div style={{
                                             fontSyle: 'italic',
                                             color: '#727272',
                                             fontFamily: 'B612, seriff',
                                             paddingBottom: '5px',
                                          }}>Logged in as: {firebase.user.email}</div>
                                       </CenterElements>
                                    </AnimatedContainer>
                                 </Route>
                                 <Route path={['/characters']}>
                                    <CharactersMenu/>
                                 </Route>
                              </Switch>
                           </FadeBetween>
                        </AnimatedContainer>}
                  </FadeBetween>
               </Hints>
            </ContentBox>
         </CenterElements>
      </Page>
  );
}

export default LandingPage;
