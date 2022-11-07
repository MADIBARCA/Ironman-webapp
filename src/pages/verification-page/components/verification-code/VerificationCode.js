import React from "react";

import ReactCodeInput from "react-code-input";
import { VerificationCodeInputStyles } from "./VerificationCodeInputStyles";

import "./VerificationCode.css";

const VerificationCode = () => {
  return (
    <div className="verificationCode">
      <h3>
        We’ve sent you a verification code at <span>you@company.com</span>
      </h3>

      <p>Verification code</p>
<<<<<<< HEAD
      <ReactCodeInput type="text" fields={4} {...VerificationCodeInputStyles} />

=======
      <ReactCodeInput type="number" fields={4} {...VerificationCodeInputStyles}/>
       
>>>>>>> 480934fb94a5d209a086b487d25b909b7618f852
      <button>Submit</button>

      <p className="verificationCodeResendEmail">
        Didn’t recieve a code? <span>Resend email</span>
      </p>
    </div>
  );
};

export default VerificationCode;
