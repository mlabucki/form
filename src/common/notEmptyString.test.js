import { notEmptyString } from "./notEmptyString";

describe(notEmptyString.name, () => {
  it("returns false for wrong type", () => {
    expect(notEmptyString(undefined)).toEqual(false);
    expect(notEmptyString(true)).toEqual(false);
    expect(notEmptyString(false)).toEqual(false);
    expect(notEmptyString(null)).toEqual(false);
    expect(notEmptyString(1)).toEqual(false);
    expect(notEmptyString({})).toEqual(false);
  });

  it("returns false for empty string", () => {
    expect(notEmptyString("")).toEqual(false);
  });

  it("returns true for not empty string", () => {
    expect(notEmptyString("text")).toEqual(true);
  });
});
