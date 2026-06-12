import styled from "styled-components";

export const MiniBannerContainer = styled.div`
position: relative;
    display: flex;
    flex-direction: column;
    justify-content: end;
    border: 1px solid var(--border);
    border-radius: 20px;
    min-width: 320px;
    height: 450px;
    padding: 25px 25px;
    background-size: cover;
    background-position: -350px;
    background-repeat: no-repeat;
    overflow: hidden;
    z-index: 1;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: inherit; 
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        filter: hue-rotate(40deg) saturate(30%);
        
        z-index: -2;
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.91) 75%);
        z-index: -1;}
`;

export const TitleMiniBanner = styled.h3`
    font-size: var(--size-title-small);
    font-family: var(--font-primary);
    background: var(--bg-horizontal);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
`;

export const TextMiniBanner = styled.p`
    font-size: var(--size-medium);
    font-family: var(--font-primary);
    color: var(--tertiary);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const CountGames = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
`;

export const Text = styled.p`
    font-size: var(--size-small);
    font-family: var(--font-secondary);
    color: var(--fourth);
    white-space: nowrap;
`;

export const ArrowIcon = styled.span`
    width: 12px;
    height: 12px;
    border: solid var(--contrast-white);
    border-radius: 3px;
    border-width: 4px 0 0 4px; 
    transform: rotate(135deg);
    `;