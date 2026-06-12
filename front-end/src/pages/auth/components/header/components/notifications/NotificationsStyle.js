import styled from "styled-components";

export const NotificationContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border: 1px solid #413653;
    border-radius: 100%;
`;

export const NotificationButton = styled.button`
    border: none;
    background: transparent;
    cursor: pointer;
    font-size: 16px;
    position: absolute right;
    color: var(--icons);

    &:hover {
      color: #59585c;
    }
`;