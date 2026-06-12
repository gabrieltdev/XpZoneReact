import styled from "styled-components";

export const StyledButton = styled.button`
background-color: transparent;
  border: 1px solid var(--contrast-white);
  border-radius: 5px;
  font-size: var(--size-medium);
  cursor: pointer;
  color: var(--contrast-white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-secondary);
  font-weight: 400;
  width: ${({ $size }) => ($size === 'auth' ? '224px' : '98px')};
  height: ${({ $size }) => ($size === 'auth' ? '56px' : '56px')};
`;