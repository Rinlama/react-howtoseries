import React, { useState, useEffect } from "react";

function App() {
  const [state, setState] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setState((d) => d + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return <div className="App">{state}</div>;
}

export default App;
