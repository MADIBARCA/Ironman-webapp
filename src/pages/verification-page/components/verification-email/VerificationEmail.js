import { useEffect, useState } from "react";
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
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [btnDisabled, setBtnDisalbed] = useState(true);
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

  const emailValidation = () => {
    const pattern =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.match(pattern)) {
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }
  };

  const btnHandler = () => {
    if (!isValidEmail || !name || !number) {
      setBtnDisalbed(true);
    } else {
      setBtnDisalbed(false);
    }
  };

  useEffect(() => {
    btnHandler();
  }, [email, number, name]);

  return (
    <div className="verificationEmailWrapper">
      <form onSubmit={formSubmitHandler}>
        <div className="verificationEmailInput">
          <label>Email</label>
          <input
            placeholder={"you@example.com"}
            onChange={(e) => {
              setEmail(e.target.value);
              emailValidation();
            }}
            value={email}
          />
          <span style={{ color: "red" }}>{errorMessage}</span>
        </div>
        <div className="verificationEmailInput">
          <label>First name</label>
          <input
            placeholder={"Your name"}
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
        </div>
        <div className="verificationEmailInput">
          <label>Your start number</label>
          <input
            placeholder={"eg:100"}
            onChange={(e) => {
              setNumber(e.target.value);
            }}
            value={number}
          />
        </div>
        <button
          className="verificationEmailWrapperButton"
          disabled={btnDisabled}
          style={!btnDisabled ? {} : { background: "gray" }}
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
