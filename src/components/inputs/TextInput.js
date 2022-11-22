export function TextInput({
  onChange,
  value,
  id,
  name,
  label,
  type = "text",
  ariaLabel,
}) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        aria-label={ariaLabel}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
}
