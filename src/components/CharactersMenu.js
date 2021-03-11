import React, {
   useContext,
   useEffect,
   useState,
   useCallback,
} from 'react'

import styled from 'styled-components'

import Header from './Header'
import Row from './Row'
import ClickableItem from './ClickableItem'
import CenterElements from './CenterElements'
import FirebaseContext from 'contexts/FirebaseContext'

import AnimatedContainer from './AnimatedContainer'
import LoadingIcon from './LoadingIcon'
import FadeBetween from './FadeBetween'
import useNextPath from './useNextPath'
import NavAction from './NavAction'
import Hints from './Hints'

import CharacterCreationMenu, {CharacterCreationMenuHints} from './CharacterCreationMenu'

import {
  Route,
  useRouteMatch,
  useHistory,
  useLocation,
  Switch
} from "react-router-dom";

import {
   useHints,
} from './Hints'

const CharactersMenuHints = () => {
   let [hints, setHints] = useHints('characters');
   let firebase = useContext(FirebaseContext);
   useEffect(() => {
      if (!firebase?.user?.uid) return;
      let ref = firebase.database.ref(`Users/${firebase.user.uid}/Characters`).on('value', (snap) => {
         setHints({characters: snap?.val() || {},});
      });
      return () => {
         setHints({characters: undefined});
         ref();
      }
   }, [firebase?.user?.uid]);

   return(null);
}

const CharactersMenu = (props) => {
   let history = useHistory();
   let firebase = useContext(FirebaseContext);

   let {path, location, nextPath} = useNextPath('character menu');

   let [hints, setHints] = useHints('characters');
   let [fore, setFore] = useState(false);

   let [selected, setSelected] = useState('new');
   const driveClickable = useCallback((id) => ({
      click: x => setSelected(id),
      selected: selected === id,
   }));

   //Selects first character in the users characters
   useEffect(() => {
      setSelected(Object.keys(hints?.characters||{})?.[0] || 'new');
   }, [hints]);

   return(
      <Hints>
         {Object.entries(hints?.characters || {}).map(([id, character]) =>
            <CharacterCreationMenuHints key={id} id={id}/>
         )}
         <FadeBetween animationKey={nextPath}>
            <Switch location={location}>
               <Route exact path={path}>
                  <FadeBetween animationKey={!!hints?.characters}>
                     {hints?.characters
                     ?  <AnimatedContainer>
                           <Header>
                              Select a Character
                           </Header>
                           {Object.entries(hints.characters || {})
                              .map(([id, character]) =>
                              <ClickableItem {...driveClickable(id)} key={id}>{character?.name || id}</ClickableItem>
                           )}
                           {Object.keys(hints.characters||{}).length < 5
                              ? <ClickableItem {...driveClickable('new')}>Create a New Character!</ClickableItem>
                              : null
                           }
                           <div style={{height: '30px'}}/>
                           <NavAction back {...{fore,}}>
                              {/* <ClickableItem asButton click={()=> history.goBack()}>Go Back</ClickableItem> */}
                              <ClickableItem asButton click={() => {
                                 setFore(true);
                                 let key = selected === 'new'
                                    ?  firebase.database.ref(`Users/${firebase.user.uid}/Characters`).push().key
                                    :  selected;
                                 history.push(`${path}/CharacterCreation/${key}`);
                              }}>Select Character</ClickableItem>
                           </NavAction>
                        </AnimatedContainer>
                     : <LoadingIcon/>
                     }
                  </FadeBetween>
               </Route>
               <Route path={`${path}/CharacterCreation/:characterId`}>
                  <CharacterCreationMenu/>
               </Route>
            </Switch>
         </FadeBetween>
      </Hints>
   );
};

export default CharactersMenu;
export { CharactersMenuHints };
