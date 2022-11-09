import { useState } from "react";
import { useDispatch } from "react-redux";
import { axiosSendEmail } from "../../../../axios/axiosAuth";
import { axiosGetId } from "../../../../axios/axiosId";
import { addEmail, addId } from "../../../../redux/verificationSlice";
import "./VerificationEmail.css";

const VerificationEmailInput = ({ label, input, email, setEmail }) => {
  return (
    <div className="verificationEmailInput">
      <label>{label}</label>
      <input
        placeholder={input.placeholder}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
      />
    </div>
  );
};

const VerificationEmail = ({ setVerificationType }) => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    axiosGetId(email).then((resp) => {
      console.log(resp);
      if (resp.status === 200) {
        dispatch(addId(resp.data.data.data._id));
        axiosSendEmail(email).then((response) => {
          if (response.status === 200) {
            setVerificationType("code");
            dispatch(addEmail(email));
          }
        });
      }
      if (resp.status !== 200) {
        setErrorMessage("Not in the list");
      }
    });
  };

  return (
    <div className="verificationEmailWrapper">
      <form onSubmit={formSubmitHandler}>
        <div className="verificationEmailInput">
          <label>Email</label>
          <input
            placeholder={"you@example.com"}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          <span style={{ color: "red" }}>{errorMessage}</span>
        </div>
        <VerificationEmailInput
          label={"First Name"}
          input={{ placeholder: "Your name" }}
        />
        <VerificationEmailInput
          label={"Your start number"}
          input={{ placeholder: "eg:100" }}
        />
        <button className="verificationEmailWrapperButton">
          <span>Check eligibility</span>
        </button>
      </form>
      <p className="verificationEmailWrapperInfo">
        Having trouble? You can reach out to us via
        <span>israel@ironman.com</span>
      </p>
    </div>
  );
};

export default VerificationEmail;
