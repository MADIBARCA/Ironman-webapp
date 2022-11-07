import React from "react";

const VerificationCode = () => {
  return (
    <div className="verificationCode">
      <h3>We’ve sent you a verification code at you@company.com</h3>

      <p>Verification code</p>
      <div className="verificationCodePinBox">
        <input
          className="verificationCodePinEntry"
          type="number"
          maxLength="4"
          autoComplete="off"
        />
      </div>
    </div>
  );
};

export default VerificationCode;
