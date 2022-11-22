import { ARIA_LABELS } from "../../common/ariaLabels";
import { TEXTS } from "../../common/texts";

export function ValidationSuccess() {
  return (
    <span aria-label={ARIA_LABELS.validationSuccess}>
      {TEXTS.validationSuccess}
    </span>
  );
}
