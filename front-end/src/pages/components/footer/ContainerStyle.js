import styled from "styled-components";

export const FooterBlur = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    z-index: 0;
    border-top: 1px solid var(--secondary);
    overflow: hidden;
    background-color: rgba(173, 171, 171, 0.08);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(10px);
    isolation: isolate;
`;

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 85px 155px 0;
`;

export const FooterContent = styled.div`
`;

export const Separator = styled.hr`
    border: none;
    background-color: var(--secondary);
    height: 1px;
    margin: 10px 0;
`;