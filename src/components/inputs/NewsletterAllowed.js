import { TEXTS } from "../../common/texts";
import { noOp } from "../../common/noOp";

export function NewsletterAllowed({ onChange = noOp, checked = false }) {
  return (
    <>
      <label htmlFor="newsletterAllowed">{TEXTS.newsletterAllowed}</label>
      <input
        id="newsletterAllowed"
        type="checkbox"
        name="newsletterAllowed"
        checked={checked}
        onChange={onChange}
      />
    </>
  );
}
