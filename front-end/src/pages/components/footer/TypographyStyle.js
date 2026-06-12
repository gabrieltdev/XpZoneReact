import styled from "styled-components";

export const Title = styled.h1`
    white-space: pre-line;
    font-size: var(--size-large);
    font-weight: var(--font-weight-bold);
    font-family: var(--font-primary);
    background: var(--bg-horizontal);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
`;

export const NavTitle = styled.h2`
    font-size: var(--size-title-small);
    font-family: var(--font-secondary);
    color: var(--tertiary);
`;

export const NavText = styled.a`
    font-size: var(--size-medium);
    font-family: var(--font-secondary);
    color: var(--tertiary);
    text-decoration: none
`;

export const Copyright = styled.p`
    white-space: pre-line;
    font-family: var(--font-secondary);
    font-size: var(--size-small);
    text-align: center;
    line-height: 1.5;
    color: var(--tertiary);
    `;