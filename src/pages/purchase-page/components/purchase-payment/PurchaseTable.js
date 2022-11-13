import React from "react";
import "./PurchasePayment.css";

const PruchaseTable = () => {
  const titles = ["NFT Price", "Service Fee", "To pay"];

  const elements = ["$75 USDT", "0 USDT", "$75 USDT"];

  return (
    <div className="purchasePaymentTable">
      {titles.map((el, i) => (
        <div key={i} className="purchasePaymentTableRow">
          <p>{el}</p>
          <p>{elements[i]}</p>
        </div>
      ))}
    </div>
  );
};

export default PruchaseTable;
