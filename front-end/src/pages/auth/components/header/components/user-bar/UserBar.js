import styled from "styled-components";

export const UserBarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
`;

export const UserContainer = styled.div`
    display: flex;
    gap: 15px;
`;

export const AvatarContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const Nickname = styled.p`
    font-family: var(--font-secondary);
    font-size: var(--size-small);
    font-weight: var(--font-weight-regular);
    color: #B6B1BC;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;