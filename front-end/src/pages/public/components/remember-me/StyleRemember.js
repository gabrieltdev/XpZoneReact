import styled from "styled-components";


export const CustomCheckbox = styled.span`
position: relative;
  display: inline-block; 
  height: 15px;
  width: 15px;
  background-color: transparent;
  background-color: var(--primary);
  border: 3px solid var(--secondary);
  border-radius: 4px;
  margin-right: 8px;

  &::after {
    content: "";
    position: absolute;
    display: none;
    left: 4px;
    top: 1px;
    width: 4px;
    height: 8px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
    }
`;

export const RememberMe = styled.label`
  color: var(--tertiary);
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  cursor: pointer;
  font-size: var(--size-small);

  input {
    display: none;
  }

  input:checked + ${CustomCheckbox} {
    background-color: var(--secondary);
    border-color: #2F0C66;
  }

  input:checked + ${CustomCheckbox}::after {
    display: block;
  }
`;