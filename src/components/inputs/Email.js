import { TEXTS } from "../../common/texts";
import { noOp } from "../../common/noOp";
import { TextInput } from "./TextInput";
import { ARIA_LABELS } from "../../common/ariaLabels";

export function Email({ onChange = noOp, value = "" }) {
  return (
    <TextInput
      onChange={onChange}
      value={value}
      id="email"
      label={TEXTS.email}
      name="email"
      type="email"
      ariaLabel={ARIA_LABELS.email}
    />
  );
}
