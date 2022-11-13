import { useState } from "react";

import PurchaseImg from "./components/purchase-img/PurchaseImg";
import PurchaseTitle from "./components/purchase-title/PurchaseTitle";
import PurchasePayment from "./components/purchase-payment/PurchasePayment";
import PurchaseSuccess from "./components/purchase-success/PurchaseSuccess";

import "./PurchasePage.css";

const PurchasePage = () => {
  const [purchaseType, setPurchaseType] = useState("payment");

  const typeHandler = () => {
    switch (purchaseType) {
      case "payment":  
        return <PurchasePayment setPurchaseType={setPurchaseType} />;
      case "success":
        return <PurchaseSuccess />;
      default:
        return <PurchasePayment />;
    }
  };

  return (
    <div className="purchasePageWrapper">
      <div className="purchasePageLeftDiv">
        <PurchaseImg />
      </div>
      <div className="purchasePageRightDiv">
        <PurchaseTitle 
          purchaseType={purchaseType}
          setPurchaseType={setPurchaseType}
        />
        {typeHandler()}
      </div>
    </div>
  );
};

export default PurchasePage;
