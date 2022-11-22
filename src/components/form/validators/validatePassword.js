import { notEmptyString } from "../../../common/notEmptyString";

export function validatePassword(password) {
  return notEmptyString(password);
}
