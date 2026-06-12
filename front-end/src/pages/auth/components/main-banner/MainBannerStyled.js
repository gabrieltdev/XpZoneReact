import {styled, keyframes} from "styled-components";

export const MainStyled = styled.section`
    display: flex;
    width: 100%;
    align-items: center;
    margin-bottom: 420px;
`;

export const MainContainer = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    max-width: 1500px;
`;

export const BannerContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid var(--border);
    border-radius: 20px;
    min-width: 1110px;
    margin-left: 10px;
    height: 450px;
    padding: 50px 80px 115px;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
`;

export const TitleBanner = styled.h2`
    font-size: var(--size-title-large);
    font-family: var(--font-primary);
    background: var(--bg-horizontal);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
`;

export const NameGame = styled.h3`
    font-size: var(--size-title-extra-large);
    font-family: var(--font-primary);
    color: var(--contrast-white);
`;

export const TextCountGames = styled.p`
    font-size: var(--size-medium);
    font-family: var(--font-secondary);
    font-weight: var(--font-weight-regular);
    color: var(--fourth);
`;

export const SeeMore = styled.button`
    margin: 20px 0;
    width: 120px;
    height: 60px;
    border: 1px solid var(--contrast-white);
    border-radius: 5px;
    background-color: transparent;
    font-size: var(--size-medium);
    font-family: var(--font-secondary);
    color: var(--contrast-white);

`;

export const MiniBannerContainer = styled.div`
    display: flex;
    position: absolute;
    width: 102.6%;
    margin-left: 50px;
    gap: 20px;
    top: 500px;
    overflow: scroll;
    user-select: none;
    
    &::-webkit-scrollbar {
        display: none ;
    }
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