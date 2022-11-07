import React, { useEffect, useState } from "react";

import ReactCodeInput from "react-code-input";
import { VerificationCodeInputStyles } from "./VerificationCodeInputStyles";

import "./VerificationCode.css";

const VerificationCode = () => {
  const [resendCode, setResendCode] = useState(false);
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    let newsInterval = setInterval(() => {
      if (resendCode) {
        if (timer === 0) {
          setTimer(60);
          setResendCode(false);
        } else {
          setTimer(timer - 1);
        }
      }
    }, 1000);
    return () => {
      clearInterval(newsInterval);
    };
  });
  return (
    <div className="verificationCode">
      <h3>
        We’ve sent you a verification code at <span>you@company.com</span>
      </h3>

      <p>Verification code</p>
      <ReactCodeInput
        type="number" 
        fields={4}
        placeholder={"0"}
        {...VerificationCodeInputStyles}
      />

      <button>Submit</button>

      <p className="verificationCodeResendEmail">
        Didn’t recieve a code?{" "}
        {resendCode ? (
          <span>Resend code in {timer}</span>
        ) : (
          <span
            onClick={() => {
              setResendCode(true);
            }}
          >
            Resend email
          </span>
        )}
      </p>
    </div>
  );
};

export default VerificationCode;
