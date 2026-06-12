import {styled, keyframes} from "styled-components";

export const MainStyled = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 1020px;
`;

export const FilterContainer = styled.div`
    display: flex;
    margin: 40px 0 10px;
    width: 100%;
    justify-content: end;
`;

export const GamesContainer = styled.div`
    display: flex;
    gap: 25px;
    flex-wrap: wrap;
    width: 1020px;
`;

export const Order = styled.select`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 160px;
    height: 42px;
    gap: 10px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: var(--size-medium);
    font-family: var(--font-secondary);
    color: var(--contrast-white);
    white-space: nowrap;

    &&:focus, textarea:focus, select:focus {
    outline: none;
    box-shadow: none;
    }

    &:hover {
        opacity: 0.7;
    }
`;

export const Content = styled.option`
    font-size: var(--size-small);
    background-color: var(--tertiary);
    color: var(--contrast-white);

    &&:hover {
  background-color: #ebf8ff;
}
`;

export const ArrowMoreIcon = styled.span`
    width: 9px;
    height: 9px;
    border: solid var(--contrast-white);
    border-radius: 3px;
    border-width: 4px 0 0 4px; 
    transform: rotate(225deg);
    margin-bottom: 5px;
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

export const TextNotGames = styled.p`
    font-size: var(--size-title-small);
    font-family: var(--font-primary);
    color: var(--fourth);
    font-weight: var(--font-weight-bold);
    margin: 30px;
`;