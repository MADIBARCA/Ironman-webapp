import { useNavigate } from "react-router-dom";
import arrowLeft from "../../../../assets/verification-page/verification-title/arrowLeft.png";

import "./VerificationTitle.css";

const VerificationTitle = () => {
  const navigate = useNavigate();
  return (
    <div className="verificationTitleWrapper">
      <div
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={arrowLeft} alt="arrow" className="verificationTitleImg" />
        <span className="verificationTitleBack">Back</span>
      </div>
      <h1>Verify your eligibility for the Finisher NFT</h1>
      <p>
        The Finisher NFT can only be minted by the finishers of
        <span>Ironman Israel 2022</span> held on 25th November 2022.
      </p>
    </div>
  );
};

export default VerificationTitle;
