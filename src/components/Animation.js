import React, {useState} from 'react'

import AnimationContext from 'contexts/AnimationContext'


const Animation = (props) => {
  const [completed, setCompleted] = useState();
  const pass = {completed, setCompleted};

  return(

    <AnimationContext.Provider value={pass}>
      {props.children}
    </AnimationContext.Provider>
  );
}

export default Animation;