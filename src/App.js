import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

//https://ratesapi.io/documentation/

function App() {
  const [rates, setRates] = useState([]);

  useEffect(() => {
    getRates("USD");
  }, []);
  const getRates = async (stateBase) => {
    const { data } = await axios.get(
      `https://api.ratesapi.io/api/latest?base=${stateBase}`
    );
    const newRates = [];
    for (const [key, value] of Object.entries(data.rates)) {
      newRates.push({ symbol: key, rate: value });
    }
    setRates(newRates);
  };

  return (
    <div>
      <div className="m-5">
        <div className="row">
          <div className="col">
            <h5 className="text-primary">Rates API</h5>
            <h5 className="text-success">Base : </h5>
            <select
              className="custom-select"
              onChange={(d) => {
                const value = d.target.value;
                getRates(value);
              }}
            >
              {rates.map((d) => (
                <option value={d.symbol}>{d.symbol}</option>
              ))}
            </select>
            <ul className="list-group">
              {rates.map((d) => (
                <li className="list-group-item">
                  {d.symbol} - {d.rate}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
