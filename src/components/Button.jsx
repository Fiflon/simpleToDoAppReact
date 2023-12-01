import { StyledButton } from "./styled/Button.styled";

export default function Button({
  onClick = () => {},
  className = "",
  children,
  ...params
}) {
  return (
    <StyledButton className={`${className}`} onClick={onClick} {...params}>
      {children}
    </StyledButton>
  );
}
