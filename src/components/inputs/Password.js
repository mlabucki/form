import { TEXTS } from "../../common/texts";
import { TextInput } from "./TextInput";

export function Password({ onChange, value = "" }) {
  return (
    <TextInput
      onChange={onChange}
      value={value}
      id="password"
      label={TEXTS.password}
      name="password"
      type="password"
    />
  );
}
