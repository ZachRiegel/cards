import React, {useState, useEffect} from 'react'

import {useRouteMatch, useLocation} from 'react-router-dom'

const compare = (a='', b='', depth=1, descriptor) => {
   return b?.replace?.(a, '')?.match?.(`(\\/?[^/]+){${depth}}`)?.[0] || '/';
}

let useNextPath = (descriptor, depth=1) => {
   let {path} = useRouteMatch();
   let location = useLocation();
   let [nextPath, setNextPath] = useState({
      path,
      location,
      nextPath: compare(path, location.pathname, depth, descriptor),
   });
   useEffect(() => {
      setNextPath({
         path,
         location,
         nextPath: compare(path, location.pathname, depth, descriptor),
      });
   }, [path, location]);
   return nextPath;
};

export default useNextPath;
