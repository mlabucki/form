import { ARIA_LABELS } from "../../common/ariaLabels";
import { TEXTS } from "../../common/texts";

export function SubmitButton() {
  return <button aria-label={ARIA_LABELS.submit}>{TEXTS.submit}</button>;
}
