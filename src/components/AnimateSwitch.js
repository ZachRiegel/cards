import React, {useContext} from "react";
import {motion} from 'framer-motion'
import Animation from 'components/Animation'
import AnimationContext from 'contexts/AnimationContext'

const variants = {
  enter: {
    opacity: 0
  },
  center: {
    opacity: 1,
  },
  exit: {
    opacity: 0
  }
};

const AnimationContextWrapper = (Comp) => (props) => {
  return(
    <Animation>
      <Comp {...props}/>
    </Animation>
  );
}

const AnimatedSwitchBody = (props) => {
  let animation = useContext(AnimationContext);

  return (
      <motion.div
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{duration: .7}}
        onAnimationComplete={()=>{
          animation.setCompleted(true);
        }}
      >
        {props.children}
      </motion.div>
  );
};

export default React.memo(AnimationContextWrapper(AnimatedSwitchBody));