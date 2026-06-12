import styled from "styled-components";

export const MainStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`;

export const Background = styled.div`
position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/fundo3apresentacao.png');
    background-position: center 300px;
    background-repeat: no-repeat;
    z-index: -1;
    pointer-events: none;
    }
`;