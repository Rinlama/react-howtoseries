import React, { useState, useEffect } from "react";
import "./App.css";
import data from "./services/data";

function App() {
  const [foodState, setFoodState] = useState();

  const onChangeComboBox = (e) => {
    const selectedId = e.target.value;
    const selectedFoodState = data.filter((d) => d.id == selectedId)[0];
    setFoodState(selectedFoodState);
  };

  useEffect(() => {
    setFoodState(data[1]);
  }, []);

  return (
    <div className="container m-5">
      <select
        className="custom-select"
        value={foodState?.id}
        onChange={(e) => {
          onChangeComboBox(e);
        }}
      >
        {data.map((d) => (
          <option key={d.id} value={d.id}>
            {d.restaurant}
          </option>
        ))}
      </select>
      {foodState ? (
        <img src={foodState?.image} width="100%" height="300px" />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
