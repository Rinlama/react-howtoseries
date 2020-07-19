import React, { useState } from "react";
import Card from "./component/card/Card";

function App() {
  const [customer, setCustomers] = useState("");

  useEffect(() => {
    const customer = [{ name: "Co-orderinated Bicycles", creditLimit: 20000 }];
    setCustomers(customer);
  }, []);

  return (
    <div style={{ margin: "50px" }}>
      {console.log(customer)}
      <Card />
    </div>
  );
}

export default App;
