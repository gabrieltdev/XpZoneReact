import styled from "styled-components";

export const LevelContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    border: 1px solid var(--secondary);
    border-radius: 5px;
    width: 100px;
    height: 40px;
`;

export const LevelText = styled.p`
    font-family: var(--font-secondary);
    font-size: var(--size-small);
    font-weight: var(--font-weight-regular);
    color: var(--icons);
`;

export const LevelImage = styled.img`
    object-fit: cover;
    width: 25px;
    height: 25px; 
`;