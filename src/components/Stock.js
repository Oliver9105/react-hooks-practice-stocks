import React from "react";

const Stock = ({ stock, onBuy, onSell }) => {
  return (
    <div>
      <div>
        <p>{stock.ticker} - {stock.name}</p>
        <p>Price: ${stock.price}</p>
        <p>Type: {stock.type}</p>
        <button onClick={onBuy}>Buy</button>
        {onSell && <button onClick={onSell}>Sell</button>}
      </div>
    </div>
  );
};

export default Stock;
