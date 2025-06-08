/**
 * @param {string} placeholder
 * @param {string} value
 * @param {(s: string) => void}onChange
 */

export const Input = ({ placeholder, value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
};
