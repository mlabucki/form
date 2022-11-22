import { notEmptyString } from "../../../common/notEmptyString";

export function validateFirstName(firstName) {
  return notEmptyString(firstName);
}
