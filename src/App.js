import React, { useState, useEffect } from "react";
import Card from "./components/card/Card";

function App() {
  const [customerState, setCustomerState] = useState([]);

  useEffect(() => {
    const customer = [
      { id: 1, name: "co", creditLimit: 20000 },
      { id: 2, name: "do", creditLimit: 40000 },
    ];
    setCustomerState(customer);
  }, []);

  return (
    <div>
      {customerState.map((d) => (
        <Card key={d.id} customer={d} />
      ))}
    </div>
  );
}

export default App;
