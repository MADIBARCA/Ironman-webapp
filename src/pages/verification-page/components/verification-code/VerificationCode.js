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
      <ReactCodeInput
        type="number"
        fields={4}
        {...VerificationCodeInputStyles}
      />

      <button>Submit</button>

      <p className="verificationCodeResendEmail">
        Didn’t recieve a code? <span>Resend email</span>
      </p>
    </div>
  );
};

export default VerificationCode;
