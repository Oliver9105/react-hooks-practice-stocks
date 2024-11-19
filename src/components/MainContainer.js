import React from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer({ portfolio, addToPortfolio, removeFromPortfolio }) {
  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer addToPortfolio={addToPortfolio} />
        </div>
        <div className="col-4">
          <PortfolioContainer
            portfolio={portfolio}
            removeFromPortfolio={removeFromPortfolio}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
