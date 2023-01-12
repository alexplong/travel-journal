/** @format */

import React from "react";
import data from "./data";
import Header from "./components/Header";
import Tile from "./components/Tile";

function App() {
  const tiles = data.map((item) => {
    return <Tile key={item.id} {...item} />;
  });

  return (
    <div>
      <Header />
      <section>{tiles}</section>
    </div>
  );
}

export default App;
