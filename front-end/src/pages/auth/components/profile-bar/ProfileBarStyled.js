import styled, {keyframes} from "styled-components";

export const MainStyled = styled.section`
    display: flex;
    justify-content: center;
    min-width: 1300px;
    margin: 40px 0;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    min-width: 1280px;
    max-width: 1280px;
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
    width: 100%;
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
`;

export const TextNotProfiles = styled.p`
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