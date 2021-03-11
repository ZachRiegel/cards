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
import TextField from './TextField'
import FieldManager from './FieldManager'
import CharacterPortrait from './CharacterPortrait'
import NavAction from './NavAction'

import {useHistory, useParams} from 'react-router-dom'
import {useHints} from './Hints'

const CharacterCreationMenuHints = (props) => {
   let [hints, setHints] = useHints(`CharacterCreation/${props.id}`);
   let firebase = useContext(FirebaseContext);
   useEffect(() => {
      if (!firebase?.user?.uid) return;
      let ref = firebase.database.ref(
         `Users/${firebase.user.uid}/Characters/${props.id}`
      ).on('value', (snap) => {
         setHints(snap?.val() || {});
      });

      return () => {
         setHints(undefined);
         ref();
      }
   }, [firebase?.user?.uid]);

   return(null);
}

const CharacterCreationMenu = (props) => {
   let history = useHistory();
   let firebase = useContext(FirebaseContext);
   let {characterId} = useParams();
   let [content, setContent] = useHints(`CharacterCreation/${characterId}`);
   let [invalidity, setInvalidity] = useState({});

   return(
      <AnimatedContainer>
         <Header>
            Character Info
         </Header>
         <FieldManager
            {...{
               content, setContent, invalidity, setInvalidity,
            }}
            layout='
               "characterName characterPortrait"
               "characterColor characterPortrait"
            '>
            <TextField fieldName="characterName"/>
            <TextField
               fieldName="characterColor"
               validate={(val) =>
                  !val || val.match(/#[a-f0-9]{3}$/) ? undefined : 'Invalid Color Code'
               }
            />
            <CharacterPortrait color={content?.characterColor} validity={!invalidity?.characterColor}/>
         </FieldManager>
         <div style={{height: '30px'}}/>
         <NavAction back>
            <ClickableItem asButton disabled={
               !content
               || Object.values(content || {})
                  .reduce((acc, val) => acc || !val, false)
               ||
               Object.entries(invalidity || {})
                  .reduce((acc, [key, value]) => acc || value, false)
            } click={() => {
               firebase
                  .database
                  .ref(`Users/${firebase.user.uid}/Characters/${characterId}`)
                  .set(content);
               console.log('Saved!');
            }}>Continue</ClickableItem>
         </NavAction>
      </AnimatedContainer>
   );
};

export default CharacterCreationMenu;
export {CharacterCreationMenuHints};
