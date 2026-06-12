import {styled, keyframes} from "styled-components";

export const MainStyled = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

export const TextContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const Title = styled.h2`
    font-size: var(--size-title-small);
    font-family: var(--font-primary);
    color: var(--tertiary);
    font-weight: var(--font-weight-bold);
`;

export const ConsolesContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
`;

export const CardConsole = styled.button`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;
    width: 638px;
    height: 240px;
    padding: 36px 36px;
    border: 2px solid var(--fourth);
    border-radius: 20px;
    background-image: url( ${({ img }) => (img === 'secondary' ? ('/XboxSeriesX.png') : ('/ps5.png')) });
    background-size: cover; 
    cursor: pointer;
`;

export const TitleCard = styled.h3`
    font-size: var(--size-title-medium);
    font-family: var(--font-primary);
    background: var(--bg-horizontal);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
`;

export const TextCard = styled.p`
    font-size: var(--size-medium);
    font-family: var(--font-secondary);
    font-weight: var(--font-weight-regular);
    color: var(--fourth);
`;

const pulse = keyframes`
  0%, 80%, 100% { 
    transform: scale(0);
  }
  40% { 
    transform: scale(1);
  }
`;

export const LoadingDots = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  margin: 20px auto;

  span {
    width: 12px;
    height: 12px;
    background-color: var(--emphasis);
    border-radius: 50%;
    animation: ${pulse} 1.2s infinite ease-in-out;

    &:nth-child(1) { animation-delay: -0.32s; }
    &:nth-child(2) { animation-delay: -0.16s; }
  }
`;