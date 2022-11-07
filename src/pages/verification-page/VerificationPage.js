import VerificationImg from "./components/verification-img/VerificationImg";
import VerificationTitle from "./components/verification-title/VerificationTitle";

import "./VerificationPage.css";

const VerificationPage = () => {
  return (
    <div className="verificationPageWrapper">
      <div className="verificationPageDiv">
        <VerificationImg />
      </div>
      <div>
        <VerificationTitle />
      </div>
    </div>
  );
};

export default VerificationPage;
