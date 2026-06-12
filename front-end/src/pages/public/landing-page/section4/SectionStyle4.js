import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    margin-bottom: 150px;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    gap: 60px;

    &::before {
    content: '';
    position: absolute;
    top: 40%;
    height: 3%;
    width: 95%;
    left: 10px;
    background-color: var(--primary);
    z-index: -1;
  }
`;

export const IconContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

export const Icon = styled.img`
`;