import React from "react";
import Temp from "./Weather/Temp";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <center>
        <h1
          style={{
            marginBottom: 180,
            marginTop: -80,
            color: "white",
            fontFamily: "sans-serif",
          }}
        >
          WEATHER CHECKER APP
        </h1>
      </center>
      <Temp />
    </>
  );
}

export default App;
