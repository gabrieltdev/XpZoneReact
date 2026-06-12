import styled from "styled-components";

export const FavoriteContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 50px;
    height: 50px;
    border: 1px solid #413653;
    border-radius: 100%;
`;

export const FavoriteButton = styled.button`
    border: none;
    background: transparent;
    cursor: pointer;
    position: absolute right;
    color: var(--icons);

    &:hover {
      color: #59585c;
    }
`;