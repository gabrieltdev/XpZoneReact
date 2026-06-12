import styled from "styled-components";

export const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    width: ${({ $size }) => ($size === 'big' ? '60px' : '50px')};
    height: ${({ $size }) => ($size === 'big' ? '60px' : '50px')};
    border: 2px solid transparent;
    border-radius: 100%;
    background-image: var(--bg-vertical); 
    background-origin: border-box;
    background-clip: border-box;
`;

export const ProfileImage = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 50%;

`;

export const ButtonProfile = styled.button`
    display: flex;
    min-width: 50px;
    min-height: 50px;
    border-radius: 100%;
    cursor: pointer;
`;