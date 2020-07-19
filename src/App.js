import React, { useState, useEffect } from "react";
import Card from "./component/card/Card";

function App() {
  const [customer, setCustomers] = useState([]);

  useEffect(() => {
    const customer = [{ name: "Co-orderinated Bicycles", creditLimit: 20000 }];
    setCustomers(customer);
  }, []);

  return (
    <div style={{ margin: "50px" }}>
      {customer.map((d) => (
        <Card key={d.name} customer={d} />
      ))}
    </div>
  );
}

export default App;
