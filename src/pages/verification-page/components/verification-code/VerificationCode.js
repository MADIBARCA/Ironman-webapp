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
  const [code, setCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loader, setLoader] = useState(false);

  const email = useSelector((state) => state.verification.email);
  const id = useSelector((state) => state.verification.id);

  const verificationFunc = () => {
    axiosEmailVerify(email, code).then((response) => {
      setLoader(false);
      if (response.status === 200 && !response.data.data.isRegistered) {
        axiosRegister(email).then((response) => {
          if (response.status === 200) {
            dispatch(addAccessToken(response.data.data.data));
            navigate(`/asset/${id}`);
          }
        });
      }
      if (response.status === 200 && response.data.data.isRegistered) {
        dispatch(addAccessToken(response.data.data.token));
        navigate(`/asset/${id}`);
      }
      if (response.status === 400) {
        setErrorMessage("Invalid verification code");
      }
      if (response.status === 500) {
        setErrorMessage("Something went wrong");
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

  useEffect(() => {
    if (code.length == 4) {
      setLoader(true);
      verificationFunc();
    }
  }, [code]);
  return (
    <div className="verificationCode">
      <p>Verification code</p>
      {!loader && (
        <ReactCodeInput
          type="number"
          fields={4}
          placeholder={"0"}
          onChange={(e) => {
            setCode(e);
            setErrorMessage("");
          }}
          {...VerificationCodeInputStyles}
        />
      )}
      {loader && <span>Loading...</span>}
      {errorMessage && (
        <span style={{ color: "red", marginTop: "10px" }}>{errorMessage}</span>
      )}
      {/*<button
        onClick={() => {
          verificationFunc();
        }}
      >
        Submit
      </button>*/}

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
