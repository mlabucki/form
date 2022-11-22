import { useState } from "react";
import { FirstName } from "../inputs/FirstName";
import { Password } from "../inputs/Password";
import { NewsletterAllowed } from "../inputs/NewsletterAllowed";
import { Email } from "../inputs/Email";
import { SubmitButton } from "../inputs/SubmitButton";
import { validateForm } from "./validateForm";
import { TEXTS } from "../../common/texts";

export function Form() {
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

  return (
    <form onSubmit={handleSubmit} noValidate={true}>
      <FirstName onChange={setFirstName} value={firstName} />
      <Password onChange={setPassword} value={password} />
      <NewsletterAllowed
        onChange={() => setNewsletterAllowed(!newsletterAllowed)}
        checked={newsletterAllowed}
      />
      {newsletterAllowed && <Email value={email} onChange={setEmail} />}
      <SubmitButton />
      {isValid === true && TEXTS.validationSuccess}
      {isValid === false && TEXTS.validationError}
    </form>
  );
}
