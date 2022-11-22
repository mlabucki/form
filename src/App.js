import { useState } from "react";

const AT_LEAST_ONE_AT_SIGN_RE = /^[^@]*@{1}[^@]*$/;

function validateForm(firstName, password, email, newsletterAllowed) {
  const firstNameValid = firstName !== "";
  const passwordValid = password !== "";
  const emailValid = newsletterAllowed
    ? AT_LEAST_ONE_AT_SIGN_RE.test(email) && email.includes(".")
    : true;

  return firstNameValid && passwordValid && emailValid;
}

function App() {
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [newsletterAllowed, setNewsletterAllowed] = useState(false);
  const [isValid, setIsValid] = useState(undefined);

  const handleSubmit = (e) => {
    e.preventDefault();
    const valid = validateForm(firstName, password, email, newsletterAllowed);
    setIsValid(valid);
  };

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const handleNewsletterAllowedChange = () => {
    setNewsletterAllowed(!newsletterAllowed);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={handleInputChange(setFirstName)}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="text"
          placeholder="Password"
          value={password}
          onChange={handleInputChange(setPassword)}
        />
        <label htmlFor="newsletterAllowed">Allow newsletter</label>
        <input
          id="newsletterAllowed"
          type="checkbox"
          name="newsletterAllowed"
          checked={newsletterAllowed}
          onChange={handleNewsletterAllowedChange}
        />
        {newsletterAllowed && (
          <>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="Email"
              value={email}
              onChange={handleInputChange(setEmail)}
            />
          </>
        )}
        <button>Submit</button>
        {isValid === true && "Registered successfully"}
        {isValid === false && "Validation error"}
      </form>
    </div>
  );
}

export default App;
