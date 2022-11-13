import { useNavigate } from "react-router-dom";
import arrowLeft from "../../../../assets/verification-page/verification-title/arrowLeft.png";

import "./PurchaseTitle.css";

const PurchaseTitle = ({ purchaseType, setPurchaseType }) => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    if (purchaseType === "email") {
      navigate("/");
    } else {
      setPurchaseType("email");
    }
  };
  return (
    <div className="purchaseTitleWrapper">
      <div
        onClick={() => {
          navigateHandler();
        }}
      >
        <img src={arrowLeft} alt="arrow" className="purchaseTitleImg" />
        <span className="purchaseTitleBack">Back</span>
      </div>
      {purchaseType === "payment" && (
        <h1>You are about to purchase the 70.3 Finisher NFT</h1>
      )}
      {purchaseType === "success" && (
        <h1>Congratulations!</h1>
      )}
      {purchaseType === "payment" && <p>Select your payment method</p>}
      {purchaseType === "success" && (
        <p>
          You have successfully purchased your NFT. We'll be handcrafting your
          Finisher NFT Bundle and hence we'll get back to you within 3 days.
          Keep a tab on your inbox for our updates!
        </p>
      )} 
    </div>
  );
};

export default PurchaseTitle;
