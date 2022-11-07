import VerificationEmail from "./components/verification-email/VerificationEmail";
import VerificationImg from "./components/verification-img/VerificationImg";
import VerificationTitle from "./components/verification-title/VerificationTitle";

import "./VerificationPage.css";

const VerificationPage = () => {
  return (
    <div className="verificationPageWrapper">
      <div className="verificationPageLeftDiv">
        <VerificationImg />
      </div>
      <div className="verificationPageRightDiv">
        <VerificationTitle />
        <VerificationEmail />
      </div>
    </div>
  );
};

export default VerificationPage;
