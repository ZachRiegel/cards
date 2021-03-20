import React, {useState, useEffect} from 'react'
import {Route, useRouteMatch, useLocation, useHistory, useParams} from 'react-router-dom'

const compare = (a='', b='', depth=1, descriptor) => {
   return b?.replace?.(a, '')?.match?.(`(\\/?[^/]+){${depth}}`)?.[0] || '/';
}

let useRouting = (descriptor='', depth=1) => {
   let {path} = useRouteMatch();
   let location = useLocation();
   let history = useHistory();
   let params = useParams();
   let [nextPath, setNextPath] = useState({
      path,
      location,
      nextPath: compare(path, location.pathname, depth, descriptor),
      goRelative: (relative) => history.push(`${path}/${relative}`),
      goAbsolute: (abs) => history.push('/'+abs),
      goAback: () => history.goBack(),
      goForth: () => history.goForward(),
      params,
   });
   useEffect(() => {
      setNextPath({
         path,
         location,
         nextPath: compare(path, location.pathname, depth, descriptor),
         goRelative: (relative) => history.push(`${path}/${relative}`),
         goAbsolute: (relative) => history.push(`${path}/${relative}`),
         goAback: () => history.goBack(),
         goForth: () => history.goForward(),
         params,
      });
   }, [path, location, history, params]);
   return nextPath;
};

export default useRouting;
export {Route};
