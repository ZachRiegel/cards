import React from 'react'

import FadeBetween from 'components/FadeBetween'
import useRouting from 'components/useRouting'

import {
   Switch
} from 'react-router-dom'

const FadeBetweenRoutes = (props) => {
   let {path, nextPath, location} = useRouting();

   return (
      <FadeBetween animationKey={nextPath}>
         <Switch location={location}>
            {props.children}
         </Switch>
      </FadeBetween>
   )
}

export default FadeBetweenRoutes;
