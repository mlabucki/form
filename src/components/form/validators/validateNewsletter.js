import { validateEmail } from "./validateEmail";

export function validateNewsletter(newsletterAllowed, email) {
  return newsletterAllowed ? validateEmail(email) : true;
}
