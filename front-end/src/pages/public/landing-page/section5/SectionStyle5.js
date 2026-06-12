import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 120px;
`;

export const ContentContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 150px 0 50px;
    position: relative;
`;

export const IconGamePad = styled.img`
    position: absolute;
    right: 87%;
    top: 58%;
`;

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ImageText =styled.img`
    z-index: -1;
    position: absolute;
    bottom: 94%;
`;

export const IconChat = styled.img`
    position: absolute;
    left: 93%;
    bottom: 57%;
`;