import React, { useState } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

function App() {
  const [portfolio, setPortfolio] = useState([]);

  const addToPortfolio = (stock) => {
    setPortfolio([...portfolio, stock]);
  };

  const removeFromPortfolio = (stock) => {
    setPortfolio(portfolio.filter((item) => item.id !== stock.id));
  };

  return (
    <div>
      <Header />
      <MainContainer
        portfolio={portfolio}
        addToPortfolio={addToPortfolio}
        removeFromPortfolio={removeFromPortfolio}
      />
    </div>
  );
}

export default App;
