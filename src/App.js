/** @format */

import React from "react";
import data from "./data";
import Header from "./components/Header";
import Tile from "./components/Tile";

const tiles = data.map((item) => {
  return <Tile />;
});

function App() {
  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
