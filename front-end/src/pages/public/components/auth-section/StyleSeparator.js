import styled from "styled-components";

export const Separator = styled.p`
    display: flex;
    justify-content: center;
  align-items: center;
  width: 100%;
  color: var(--tertiary);
  margin: 20px 0;
  font-size: 1.1rem;

  &::before,
  &::after {
    content: "";
    height: 2px;
    width: 80px;
    background-color: var(--secondary);
  }

  &::before {
    margin-right: 15px;
  }

  &::after {
    margin-left: 15px;
}
`;