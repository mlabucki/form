import { validateFirstName } from "./validators/validateFirstName";
import { validateNewsletter } from "./validators/validateNewsletter";
import { validatePassword } from "./validators/validatePassword";

export function validateForm(firstName, password, email, newsletterAllowed) {
  const firstNameValid = validateFirstName(firstName);
  const passwordValid = validatePassword(password);
  const newsletterValid = validateNewsletter(newsletterAllowed, email);
  return firstNameValid && passwordValid && newsletterValid;
}
