import styled, {keyframes} from "styled-components";

export const MainStyled = styled.section`
    display: flex;
    flex-direction: column;
    min-width: 1290px;
    margin: 40px 0;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    width: 100%;
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

export const CardContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    flex-wrap: wrap;
`;

export const TextNotGames = styled.p`
    font-size: var(--size-title-small);
    font-family: var(--font-primary);
    color: var(--fourth);
    font-weight: var(--font-weight-bold);
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