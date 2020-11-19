import React, {useState, useContext, useEffect} from 'react'

import CardContext from 'contexts/CardContext'
import FirebaseContext from 'contexts/FirebaseContext'
import CardInterpreter from 'components/CardInterpreter'
import {parseCardName} from 'components/CardUtilities'

const tagLookup = {
  waterSkill: 'hydromancer',
  airSkill: 'aeromancer',
  earthSkill: 'geomancer',
  fireSkill: 'pyromancer',
  barbarianSkill: 'barbarian',
  legionnaireSkill: 'legionnaire',
  swashbucklerSkill: 'swashbuckler',
  marksmanSkill: 'marksman',
  meleeAttack: 'melee',
  rangedAttack: 'ranged',
};

const CardLoader = (props) => {
  const firebase = useContext(FirebaseContext);

  let [cards, setCards] = useState([]);

  useEffect(()=>{
    firebase.database.ref('/Cards/').on('value', (snapshot) => {
      setCards(
        Object.entries(snapshot.val()).map(([key, card])=>{
          try {
            card.key = key;
            card.body = CardInterpreter(card.body);
            card.name = parseCardName(key);
            card.lookup = `
              |n:${card.name}
              |cost:${((cost)=>{
                const abbreviationLookup = {
                  legionnaireSkill: 'l',
                  swashbucklerSkill: 's',
                  barbarianSkill: 'b',
                  marksmanSkill: 'm',
                  air: 'a',
                  water: 'h',
                  earth: 'g',
                  fire: 'p',
                }
                let result='';
                if (!cost) cost={};
                if (cost.any!==undefined) result+=`[c:${String(cost.any)}]`;
                Object.keys(cost).forEach((key, index)=>{
                  if (key==='any') return;
                  if (cost[key]) {
                    result += `[c:${abbreviationLookup[key] + String(cost[key])}]`;
                  }
                });
                return result;
              })(card.cost)}|
              |tags:${((tags)=>{
                if (!tags) return '';
                let result = '';
                tags.forEach((value, index)=>{
                  result+=`[t:${tagLookup[value]}]`;
                });
                return result;
              })(card.tags)}
              |body:${card.body.reduce((acc, val) => (acc+'\n'+val))}
            `.replace(/\s/g,'').toLocaleLowerCase();
            return card;
          } catch(e) {
            console.log(card.name);
            return {};
          }
        }).reduce((acc, val) => Object.assign(acc, {[val.key]: val}), {})
      );
    });
  }, [firebase]);

  return(
    <CardContext.Provider value={cards}>
      <div style={{width:0,height:0}}>
      </div>
      {props.children}
    </CardContext.Provider>
  );
}

export default CardLoader;