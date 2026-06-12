import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 15px;
`;

export const Image = styled.img`
    height: 31px;
    width: 44px;
    border-radius: 4px;
    object-fit: cover;
`;

export const LanguageContainer = styled.select`
    border: transparent;
    font-family: 'Open Sans';
    font-size: 20px;
    font-weight: 200;
    width: 215px;
    background-color: transparent;
    color: #BFB4D0;

    &:focus {
    outline: none;
    border:2px solid var(--secondary);
    border-radius: 5px;
    }
`;

export const Language = styled.option`
`;