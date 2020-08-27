import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [ratesList, setRatesList] = useState([]);
  const [base, setBase] = useState("USD");

  useEffect(() => {
    getRates("USD");
  }, []);

  const getRates = async (base) => {
    const res = await axios.get(
      ` https://api.exchangeratesapi.io/latest?base=${base}`
    );
    const { rates } = res.data;

    const ratesTemp = [];
    for (const [symbol, rate] of Object.entries(rates)) {
      ratesTemp.push({ symbol, rate });
    }
    setRatesList(ratesTemp);
  };

  return (
    <div className="App">
      <select
        className="custom-select"
        value={base}
        onChange={(e) => {
          const value = e.target.value;
          setBase(value);
          getRates(value);
        }}
      >
        {ratesList.map((d) => (
          <option value={d.symbol} key={d.symbol}>
            {d.symbol}
          </option>
        ))}
      </select>
      <ul className="list-group">
        {ratesList.map((d) => (
          <li className="list-group-item" key={d.symbol}>
            {d.symbol} - {d.rate}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
