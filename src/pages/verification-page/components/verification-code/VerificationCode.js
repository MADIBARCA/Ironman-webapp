import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactCodeInput from "react-code-input";

import {
  axiosEmailVerify,
  axiosRegister,
  axiosSendEmail,
} from "../../../../axios/axiosAuth";
import { useDispatch, useSelector } from "react-redux";
import { addAccessToken } from "../../../../redux/verificationSlice";

import { VerificationCodeInputStyles } from "./VerificationCodeInputStyles";
import "./VerificationCode.css";

const VerificationCode = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [resendCode, setResendCode] = useState(false);
  const [timer, setTimer] = useState(60);
  const [code, setCode] = useState(null);

  const email = useSelector((state) => state.verification.email);

  const verificationFunc = () => {
    axiosEmailVerify(email, code).then((response) => {
      if (response.status === 200 && !response.data.data.isRegistered) {
        axiosRegister(email).then((response) => {
          if (response.status === 200) {
            dispatch(addAccessToken(response.data.data.data));
            navigate("/");
          }
        });
      } else {
        dispatch(addAccessToken(response.data.data.token));
        navigate("/");
      }
    });
  };

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
      <p>Verification code</p>
      <ReactCodeInput
        type="number"
        fields={4}
        placeholder={"0"}
        onChange={(e) => {
          setCode(e);
        }}
        {...VerificationCodeInputStyles}
      />

      <button
        onClick={() => {
          verificationFunc();
        }}
      >
        Submit
      </button>

      <p className="verificationCodeResendEmail">
        Didn’t recieve a code?{" "}
        {resendCode ? (
          <span>Resend code in {timer}</span>
        ) : (
          <span
            onClick={() => {
              setResendCode(true);
              axiosSendEmail(email);
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
