export default function Button({
  onClick = () => {},
  className = "",
  children,
  ...params
}) {
  return (
    <button className={`${className}`} onClick={onClick} {...params}>
      {children}
    </button>
  );
}
