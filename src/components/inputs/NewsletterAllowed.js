import { TEXTS } from "../../common/texts";
import { noOp } from "../../common/noOp";
import { ARIA_LABELS } from "../../common/ariaLabels";

export function NewsletterAllowed({ onChange = noOp, checked = false }) {
  return (
    <>
      <label htmlFor="newsletterAllowed">{TEXTS.newsletterAllowed}</label>
      <input
        id="newsletterAllowed"
        type="checkbox"
        name="newsletterAllowed"
        aria-label={ARIA_LABELS.newsletterAllowed}
        checked={checked}
        onChange={onChange}
      />
    </>
  );
}
