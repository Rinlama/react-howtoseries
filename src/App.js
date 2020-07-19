import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [state, setstate] = useState("");

  const convertbase64 = async (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  return (
    <div className="App">
      <input
        type="file"
        onChange={async (d) => {
          const file = d.target.files[0];
          const base = await convertbase64(file);
          console.log(base);
          setstate(base);
        }}
      ></input>
      <br></br>
      <img src={state} height="200px" style={{ border: "1px solid #ccc" }} />
    </div>
  );
}

export default App;
