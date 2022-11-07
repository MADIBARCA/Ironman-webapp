import "./VerificationEmail.css";

const VerificationEmailInput = ({ label, input }) => {
  return (
    <div className="verificationEmailInput">
      <label>{label}</label>
      <input placeholder={input.placeholder} />
    </div>
  );
};

const VerificationEmail = ({ setVerificationType }) => {
  const formSubmitHandler = (e) => {
    e.preventDefault();
    setVerificationType("code");
  };

  return (
    <div className="verificationEmailWrapper">
      <form onSubmit={formSubmitHandler}>
        <VerificationEmailInput
          label={"Email"}
          input={{ placeholder: "you@example.com" }}
        />
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
