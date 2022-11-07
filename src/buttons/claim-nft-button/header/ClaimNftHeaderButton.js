import { useNavigate } from "react-router-dom";
import "./ClaimNftHeaderButton.css";

const ClaimNftHeaderButton = () => {
  const navigate = useNavigate();
  return (
    <div
      className="claimNftHeaderButtonWrapper"
      onClick={() => {
        navigate("/verification");
      }}
    >
      <div className="claimNftHeaderButtonText">Claim Your Finisher NFT</div>
    </div>
  );
};

export default ClaimNftHeaderButton;
