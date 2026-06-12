import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const ContainerPassword = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px 0;
`;

export const Warning = styled.span`
    color: var(--danger);
    font-size: 10px;
`;

export const ContainerButtons = styled.div`
    display: flex;
    gap: 10px;
`;