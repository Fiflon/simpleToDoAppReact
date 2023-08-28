export default function Checkbox({
  onChange = () => {},
  name,
  className = "",
  ...params
}) {
  return (
    <input
      type="checkbox"
      onChange={onChange}
      name={name}
      className={className}
      {...params}
    />
  );
}
