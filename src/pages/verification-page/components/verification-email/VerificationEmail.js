import { useState } from "react";
import { useDispatch } from "react-redux";
import { axiosSendEmail } from "../../../../axios/axiosAuth";
import { addEmail } from "../../../../redux/verificationSlice";
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
  const formSubmitHandler = (e) => {
    e.preventDefault();
    setVerificationType("code");
  };
  const dispatch = useDispatch();

  return (
    <div className="verificationEmailWrapper">
      <form onSubmit={formSubmitHandler}>
        <VerificationEmailInput
          label={"Email"}
          input={{ placeholder: "you@example.com" }}
          email={email}
          setEmail={setEmail}
        />
        <VerificationEmailInput
          label={"First Name"}
          input={{ placeholder: "Your name" }}
        />
        <VerificationEmailInput
          label={"Your start number"}
          input={{ placeholder: "eg:100" }}
        />
        <button
          className="verificationEmailWrapperButton"
          onClick={() => {
            dispatch(addEmail(email));
            axiosSendEmail(email);
          }}
        >
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
