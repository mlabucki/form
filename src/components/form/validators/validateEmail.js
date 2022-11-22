import { notEmptyString } from "../../../common/notEmptyString";
import { exactlyOneRe } from "../../../common/exactlyOneRe";

const exactlyOneAtSignRe = exactlyOneRe("@");

export function validateEmail(email) {
  return (
    notEmptyString(email) &&
    exactlyOneAtSignRe.test(email) &&
    email.includes(".")
  );
}
