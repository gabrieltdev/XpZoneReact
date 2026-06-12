import styled from "styled-components";

export const StyleAuth = styled.div`
    display: flex;
    background-color: ${({ $theme }) => $theme === "light" ? "#502e83" : "#2B0B5D"};
    border-radius: 5px;
    width: 450px;
    height: 56px;
    margin-bottom: 12px;
    justify-content: center;
    align-items: center;
    gap: 12px;

    a{
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        width: 100%;
        height: 100%;
        }
`;

export const Text = styled.span`
    font-size: var(--size-medium);
    color: var(--contrast-white);
`;