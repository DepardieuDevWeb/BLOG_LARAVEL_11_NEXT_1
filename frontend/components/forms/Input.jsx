/**
 * @param {string} type
 * @param {string} placeholder
 * @param {string} value
 * @param {(s: string) => void}onChange
 */

export const Input = ({ type = "text", placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
};
