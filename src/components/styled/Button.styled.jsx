import styled from "styled-components";

export const StyledButton = styled.button`
  border-radius: 10px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  padding: 15px 60px;
  background-color: ${({ theme, bg }) => bg || theme.colors.thirdC};
  color: ${({ color }) => color || "#333"};
`;
