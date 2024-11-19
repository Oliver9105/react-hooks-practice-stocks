import React, { useState, useEffect } from "react";
import Stock from "./Stock";


const StockContainer = () => {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [sortedBy, setSortedBy] = useState("ticker");
  const [filterType, setFilterType] = useState("");
  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((response) => response.json())
      .then((data) => setStocks(data))
      .catch((error) => console.error("Error fetching stocks:", error));
  }, []);

  const handleBuyStock = (stock) => {
    setPortfolio((prevPortfolio) => [...prevPortfolio, stock]);
  };

  const handleSellStock = (stock) => {
    setPortfolio((prevPortfolio) =>
      prevPortfolio.filter((item) => item.ticker !== stock.ticker)
    );
  };

  const handleSort = (criteria) => {
    setSortedBy(criteria);
    const sortedStocks = [...stocks];
    if (criteria === "ticker") {
      sortedStocks.sort((a, b) => a.ticker.localeCompare(b.ticker));
    } else if (criteria === "price") {
      sortedStocks.sort((a, b) => a.price - b.price);
    }
    setStocks(sortedStocks);
  };

  const handleFilter = (event) => {
    setFilterType(event.target.value);
  };

  const filteredStocks = filterType
    ? stocks.filter((stock) => stock.type === filterType)
    : stocks;

  return (
    <div>
      <h1>Stocks</h1>

      <label>Filter by Type:</label>
      <select onChange={handleFilter}>
        <option value="">All</option>
        <option value="Tech">Tech</option>
        <option value="Finance">Finance</option>
        <option value="Health">Health</option>
      </select>

      <button onClick={() => handleSort("ticker")}>Sort by Ticker</button>
      <button onClick={() => handleSort("price")}>Sort by Price</button>

      <div>
        <h2>Available Stocks</h2>
        <div>
          {filteredStocks.map((stock) => (
            <Stock
              key={stock.ticker}
              stock={stock}
              onBuy={() => handleBuyStock(stock)}
            />
          ))}
        </div>

        <h2>My Portfolio</h2>
        <div>
          {portfolio.map((stock) => (
            <Stock
              key={stock.ticker}
              stock={stock}
              onSell={() => handleSellStock(stock)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StockContainer;
