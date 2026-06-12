import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    margin-bottom: 150px;
`;

export const ImageSection = styled.div`
`;

export const Image = styled.img`
width: 85%;
`;

export const TextSection = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 120px;
    gap: 20px;
`;

export const ListSection = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const List = styled.li`
    display: flex;
    align-items: center;
    gap: 15px;
`;

export const Icon = styled.span`
    display: inline-block;
    width: 8px;
    height: 16px;
    border-radius: 2px;
    border: 2px solid;
    border-image: linear-gradient(-120deg, #E44963 13.44%, #FD9452 119.06%) 4;
    border-width: 2px 0 0 2px; 
    transform: rotate(-135deg); 
    margin: 2px 6px 0;
    `;