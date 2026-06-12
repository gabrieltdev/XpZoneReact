import styled from "styled-components";

export const CategoryBarContainer = styled.div`
    max-width: 1310px;
    display: flex;
    justify-content: center;
    margin: 40px 0 40px 40px;
    -webkit-overflow-scrolling: touch;
    cursor: grab;
`;

export const Container = styled.div`
    display: flex;
    width: 100%;
    gap: 10px;
    overflow-x: scroll;

    &::-webkit-scrollbar {
        display: none ;
    }
`;

export const CategoryButton = styled.button`
    white-space: nowrap;
    padding: 10px 20px;
    cursor: pointer;
    border: 2px solid ${props => props.$isActive ? 'var(--emphasis)' : 'var(--icons)'};
    border-radius: 100px;
    color: ${props => props.$isActive ? 'var(--emphasis)' : 'var(--icons)'};
    font-family: var(--font-secondary);
    font-size: var(--size-medium);
    font-weight: 400;
    background: transparent;
    user-select: none;
`;