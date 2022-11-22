import { Form } from "./Form";
import { fireEvent } from "@testing-library/react";
import { render } from "@testing-library/react";
import { ARIA_LABELS } from "../../common/ariaLabels";

function setupForm() {
  const { queryByLabelText } = render(<Form />);
  const firstName = queryByLabelText(ARIA_LABELS.firstName);
  const password = queryByLabelText(ARIA_LABELS.password);
  const newsletterAllowed = queryByLabelText(ARIA_LABELS.newsletterAllowed);
  const form = queryByLabelText(ARIA_LABELS.form);
  return {
    firstName,
    password,
    newsletterAllowed,
    form,
    getEmail: () => queryByLabelText(ARIA_LABELS.email),
    getValidationSuccess: () => queryByLabelText(ARIA_LABELS.validationSuccess),
    getValidationError: () => queryByLabelText(ARIA_LABELS.validationError),
  };
}

function setInputValue(input, value) {
  fireEvent.change(input, { target: { value } });
}

describe(Form.name, () => {
  it("handles default state", () => {
    const { firstName, password, newsletterAllowed, getEmail } = setupForm();
    expect(firstName.value).toEqual("");
    expect(password.value).toEqual("");
    expect(newsletterAllowed.checked).toEqual(false);
    expect(getEmail()).toBeFalsy();
  });

  it("handles checkbox toggling", () => {
    const { newsletterAllowed, getEmail } = setupForm();

    fireEvent.click(newsletterAllowed);

    expect(newsletterAllowed.checked).toEqual(true);
    expect(getEmail().value).toEqual("");

    fireEvent.click(newsletterAllowed);

    expect(newsletterAllowed.checked).toEqual(false);
    expect(getEmail()).toBeFalsy();
  });

  it("handles empty first name and password", () => {
    const { form, getValidationError, getValidationSuccess } = setupForm();

    fireEvent.submit(form);

    expect(getValidationSuccess()).toBeFalsy();
    expect(getValidationError()).toBeTruthy();
  });

  it("handles empty first name", () => {
    const { form, password, getValidationError, getValidationSuccess } =
      setupForm();
    setInputValue(password, "admin123");

    fireEvent.submit(form);

    expect(getValidationSuccess()).toBeFalsy();
    expect(getValidationError()).toBeTruthy();
  });

  it("handles empty password ", () => {
    const { form, firstName, getValidationError, getValidationSuccess } =
      setupForm();
    setInputValue(firstName, "bob");

    fireEvent.submit(form);

    expect(getValidationSuccess()).toBeFalsy();
    expect(getValidationError()).toBeTruthy();
  });

  it("handles filled first name and password", () => {
    const {
      form,
      firstName,
      password,
      getValidationError,
      getValidationSuccess,
    } = setupForm();
    setInputValue(firstName, "bob");
    setInputValue(password, "admin123");

    fireEvent.submit(form);

    expect(getValidationSuccess()).toBeTruthy();
    expect(getValidationError()).toBeFalsy();
  });

  it("handles empty email", () => {
    const {
      form,
      firstName,
      password,
      newsletterAllowed,
      getValidationError,
      getValidationSuccess,
    } = setupForm();
    setInputValue(firstName, "bob");
    setInputValue(password, "admin123");
    fireEvent.click(newsletterAllowed);

    fireEvent.submit(form);

    expect(getValidationSuccess()).toBeFalsy();
    expect(getValidationError).toBeTruthy();
  });

  it("handles invalid email", () => {
    const {
      form,
      firstName,
      password,
      getEmail,
      newsletterAllowed,
      getValidationError,
      getValidationSuccess,
    } = setupForm();
    setInputValue(firstName, "bob");
    setInputValue(password, "admin123");
    fireEvent.click(newsletterAllowed);
    setInputValue(getEmail(), "d@@d.com");

    fireEvent.submit(form);

    expect(getValidationSuccess()).toBeFalsy();
    expect(getValidationError).toBeTruthy();
  });

  it("handles valid email", () => {
    const {
      form,
      firstName,
      password,
      getEmail,
      newsletterAllowed,
      getValidationError,
      getValidationSuccess,
    } = setupForm();
    setInputValue(firstName, "bob");
    setInputValue(password, "admin123");
    fireEvent.click(newsletterAllowed);
    setInputValue(getEmail(), "d@sub.example.com");

    fireEvent.submit(form);

    expect(getValidationSuccess()).toBeTruthy();
    expect(getValidationError()).toBeFalsy();
  });
});
