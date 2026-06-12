import styled from "styled-components";

export const StyledButton = styled.button`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: var(--font-secondary);
    font-size: var(--size-medium);
    font-weight: 400;
    background: var(--bg-horizontal);
    border-radius: 5px;
    border: none;
    color: var(--contrast-white);
    width: ${({ $size }) => ($size === 'auth' ? '330px' : '224px')};
    height: ${({ $size }) => ($size === 'auth' ? '56px' : '56px')};
    `;