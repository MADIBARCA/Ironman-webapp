import VerificationEmail from "./components/verification-email/VerificationEmail";
import VerificationImg from "./components/verification-img/VerificationImg";
import VerificationTitle from "./components/verification-title/VerificationTitle";
import VerificationCode from "./components/verification-code/VerificationCode";

import { useState } from "react";

import "./VerificationPage.css";

const VerificationPage = () => {
  const [verificationType, setVerificationType] = useState("email");

  const typeHandler = () => {
    switch (verificationType) {
      case "email":
        return <VerificationEmail setVerificationType={setVerificationType} />;
      case "code":
        return <VerificationCode />;
      default:
        return <VerificationEmail setVerificationType={setVerificationType} />;
    }
  };
  return (
    <div className="verificationPageWrapper">
      <div className="verificationPageLeftDiv">
        <VerificationImg />
      </div>
      <div className="verificationPageRightDiv">
        <VerificationTitle
          verificationType={verificationType}
          setVerificationType={setVerificationType}
        />
        {typeHandler()}
      </div>
    </div>
  );
};

export default VerificationPage;
