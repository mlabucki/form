import { ARIA_LABELS } from "../../common/ariaLabels";
import { TEXTS } from "../../common/texts";

export function ValidationError() {
  return (
    <span aria-label={ARIA_LABELS.validationError}>
      {TEXTS.validationError}
    </span>
  );
}
