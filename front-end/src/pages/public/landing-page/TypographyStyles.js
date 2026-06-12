import styled from "styled-components";

export const Title = styled.h1`
    white-space: pre-line;
    font-size: var(--size-title-large);
    font-weight: var(--font-weight-bold);
    font-family: var(--font-primary);
    background: var(--bg-horizontal);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
`;

export const SubTitle = styled.h2`
    white-space: pre-line;
    font-size: var(--size-title-large);
    font-weight: var(--font-weight-bold);
    font-family: var(--font-primary);
    background: var(--bg-horizontal);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
`;

export const SubTitleSmall = styled.h3`
    font-size: var(--size-large);
    font-weight: var(--font-weight-bold);
    font-family: var(--font-primary);
    background: var(--bg-horizontal);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
`;

export const Text = styled.p`
    white-space: pre-line;
    font-family: var(--font-secondary);
    font-size: var(--size-medium);
    line-height: 1.5;
    color: var(--tertiary);
`;

export const TextSmall = styled.p`
    white-space: pre-line;
    font-family: var(--font-secondary);
    font-size: var(--size-small);
    line-height: 1.5;
    color: var(--tertiary);
`;

export const TextWhite = styled.span`
    color: var(--contrast-white);
`;

export const Highlight = styled.span`
    font-weight: var(--font-weight-bold);
`;