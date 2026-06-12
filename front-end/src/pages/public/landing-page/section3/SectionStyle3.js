import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    align-items: center;
    padding-left: 190px;
`;

export const TextSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const BoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ProgressContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--special);
    gap: 30px;
    width: 513px;
    height: 246px;
    border-radius: 20px;
`;

export const XpBarContainer = styled.div`
    width:100%;
    margin-right: 20px;
`;

export const XpBar = styled.div`
    width: 75%;
    height: 8px;
    background-color: #413653;
    border-radius: 10px;
    position: relative;
    margin: 0px 74px;
`;

export const Progress = styled.div`
    width: 70%;
    height: 100%;
    background: var(--bg-horizontal);
    border-radius: 10px;
    position: relative;

  &::after {
    content: '';
    position: absolute;
    right: -20px;
    top: 50%;
    transform: translateY(-35%);
    width: 40px;
    height: 40px;
    background-image: url('/bolaDeFogo.png');
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

export const BoxMedium = styled.div`
    background-color: #210948B2;opacity: 0.7;
    border-radius: 20px;
    height: 62px;
    width: 445px;
`;

export const BoxSmall = styled.div`
    background-color: #21094880;opacity: 0.5;
    border-radius: 10px;
    height: 37px;
    width: 327px;
`;

export const ImageSection = styled.div`
`;

export const Image = styled.img`
`;