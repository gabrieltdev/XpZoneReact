import styled from "styled-components";

export const MainStyled = styled.button`
    background-color: var(--special);
    border: 1px solid var(--border);
    border-radius: 10px;
    user-select: none;
    cursor: pointer;
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    gap: 15px;
    width: 230px;
    height: 410px;
    white-space: nowrap;
    overflow: hidden;
`;

export const ImageCard = styled.img`
    border-radius: 10px 10px 0 0;
    width: 100%;
    aspect-ratio: 16 / 18;
    object-fit: cover;
`;

export const Title = styled.h2`
    padding: 0 5px 10px;
    font-size: var(--size-medium);
    font-family: var(--font-primary);
    color: var(--contrast-white);
    font-weight: var(--font-weight-bold);
    text-overflow: ellipsis;
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0 5px 20px;
`;

export const Distance = styled.p`
    font-size: var(--size-small);
    font-family: var(--font-secondary);
    font-weight: var(--font-weight-regular);
    color: var(--fourth);
`;

export const Container = styled.div`
    display: flex;
    gap: 5px;
`;

export const State = styled.p`
    font-size: var(--size-small);
    font-family: var(--font-secondary);
    font-weight: var(--font-weight-regular);
    color: var(--fourth);
    border: 1px solid var(--border);
    border-radius: 20px;
    padding: 5px 10px;
`;

export const SaleFormat = styled.p`
    font-size: var(--size-small);
    font-family: var(--font-secondary);
    font-weight: var(--font-weight-regular);
    color: var(--fourth);
    border: 1px solid var(--border);
    border-radius: 20px;
    padding: 5px 10px;
`;