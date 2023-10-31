import ProceedButton from "../../../../buttons/proceed-button/ProceedButton";
import TabsMenu from "../../../asset-page/components/tabs-menu/TabsMenu";
import PurchaseTable from "./PurchaseTable";
import { useNavigate } from "react-router-dom";

const PurchasePayment = ({setPurchaseType}) => {

  const navigate = useNavigate();

  const itemsArray = [
    {
      title: "Card",
      isActive: false,
      component: <PurchaseTable />,
    },
    {
      title: "Crypto",
      isActive: true,
      component: <PurchaseTable />,
    },
  ];
  return (
    <div className="purchaseForm">
      <TabsMenu itemsArray={itemsArray} />

      <p style={{margin: 0, marginBottom: '8px', marginTop: "24px"}}>Have a coupon code?</p>
      <div className="purchasePaymentInputBox">
        <input placeholder="Enter coupon code"/>
        <button>Apply</button> 
      </div>

      <ProceedButton text={"Purchase NFT"} onClick={()=>setPurchaseType("success")}/>

    </div>
  );
};

export default PurchasePayment;
