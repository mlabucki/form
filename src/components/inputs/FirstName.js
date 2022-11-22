import { TEXTS } from "../../common/texts";
import { TextInput } from "./TextInput";

export function FirstName({ onChange, value = "" }) {
  return (
    <TextInput
      onChange={onChange}
      value={value}
      id="firstName"
      label={TEXTS.firstName}
      name="firstName"
    />
  );
}
