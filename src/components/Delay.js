import React, { useState, useEffect } from "react";

const Delay = React.memo(({ children, delay }) => {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => setDone(true), delay);
    return () => clearTimeout(showTimer);
  });

  return done && <div>{children}</div>;
});

export default Delay;