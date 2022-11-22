import { notEmptyString } from "../../common/notEmptyString";

const AT_LEAST_ONE_AT_SIGN_RE = /^[^@]*@{1}[^@]*$/;
function validateEmail(email) {
  return (
    notEmptyString(email) &&
    AT_LEAST_ONE_AT_SIGN_RE.test(email) &&
    email.includes(".")
  );
}

function validateNewsletter(newsletterAllowed, email) {
  return newsletterAllowed ? validateEmail(email) : true;
}

function validatePassword(password) {
  return notEmptyString(password);
}

function validateFirstName(firstName) {
  return notEmptyString(firstName);
}

export function validateForm(firstName, password, email, newsletterAllowed) {
  const firstNameValid = validateFirstName(firstName);
  const passwordValid = validatePassword(password);
  const newsletterValid = validateNewsletter(newsletterAllowed, email);
  return firstNameValid && passwordValid && newsletterValid;
}
