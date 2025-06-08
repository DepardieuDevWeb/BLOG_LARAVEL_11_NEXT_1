/**
 * @param {string} placeholder
 * @param {string} value
 * @param {(s: string) => void}onChange
 */

export const Textarea = ({ placeholder, value, onChange }) => {
  return (
    <textarea
      id="content"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    ></textarea>
  );
};
