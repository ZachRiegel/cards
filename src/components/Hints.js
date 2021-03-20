import React, {useCallback, useState, useEffect, useContext} from 'react'

import HintContext from 'contexts/HintContext'
import _ from 'lodash'

let Hints = (props) => {
   let [hints, setHints] = useState({});
   let updateHints = useCallback((hintName) => (value) => {
      setHints((hints) => {
         // console.log('hints:', props.name);
         // console.log({...hints});
         // console.log({...hints, [hintName]: value});
         // console.log('=====');

         return {
            ...hints,
            [hintName]: value,
         };
      });
   });

   return(
      <HintContext.Provider value={{...hints, updateHints}}>
         {props.children}
      </HintContext.Provider>
   );
}

let useHints = (hintName) => {
   let hints = useContext(HintContext);

   let updater = useCallback((value) => {
      hints?.updateHints?.(hintName)(_.merge(hints?.[hintName], value));
   }, [hints, hints.updateHints]);

   return [hints?.[hintName], updater];
}

export default Hints;
export {useHints};
