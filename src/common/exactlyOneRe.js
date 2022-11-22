// - starts with anything but char
// - has exactly one char
// - ends with anything but char
export function exactlyOneRe(char) {
  const anythingButChar = `[^${char}]*`;
  const exactlyOneChar = `${char}{1}`;
  return new RegExp(`^${anythingButChar}${exactlyOneChar}${anythingButChar}$`);
}
