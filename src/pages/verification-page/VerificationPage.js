import VerificationEmail from "./components/verification-email/VerificationEmail";
import VerificationImg from "./components/verification-img/VerificationImg";
import VerificationTitle from "./components/verification-title/VerificationTitle";

import VerificationCode from "./components/verification-code/VerificationCode";

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
        <VerificationCode/>
      </div>
    </div>
  );
};

export default VerificationPage;
