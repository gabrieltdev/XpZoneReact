import {styled,keyframes} from "styled-components";

export const MainStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const TextResult = styled.h3`
    font-size: var(--size-medium);
    font-family: var(--font-secondary);
    font-weight: var(--font-weight-regular);
    color: var(--fourth);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const TitleGame = styled.h2`
    font-size: var(--size-title-small);
    font-family: var(--font-primary);
    font-weight: var(--font-weight-bold);
    color: var(--contrast-white);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const FilterListContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    height: max-content;
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 20px 12px;
    gap: 35px;
`;

export const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const TitleFilter = styled.h3`
    font-size: var(--size-title-small);
    font-family: var(--font-primary);
    font-weight: var(--font-weight-bold);
    color: var(--contrast-white);
`;

export const CustomCheckbox = styled.span`
    position: relative;
    display: inline-block; 
    height: 12px;
    width: 12px;
    background-color: transparent;
    background-color: var(--primary);
    border: 3px solid var(--secondary);
    border-radius: 4px;

    &::after {
        content: "";
        position: absolute;
        display: none;
        left: 4px;
        top: 1px;
        width: 2px;
        height: 6px;
        border: solid white;
        border-width: 0 3px 3px 0;
        transform: rotate(45deg);
        }
`;

export const TextContainer = styled.label`
    display: flex;
    gap: 10px;
    align-items: end;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

        input {
        display: none;
        }

        input:checked + ${CustomCheckbox} {
            background-color: var(--secondary);
            border-color: #2F0C66;
        }

        input:checked + ${CustomCheckbox}::after {
            display: block;
        }
`;

export const TextFilter = styled.p`
    font-size: var(--size-small);
    font-family: var(--font-secondary);
    font-weight: var(--font-weight-regular);
    color: var(--contrast-white);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const TextCount = styled.p`
    font-size: var(--size-smal);
    font-family: var(--font-secondary);
    font-weight: var(--font-weight-regular);
    color: var(--fourth);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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