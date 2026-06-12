import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledMoreButton = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90px;
    height: 32px;
    gap: 10px;

    &:hover {
        opacity: 0.7;
    }
`;

export const Text = styled.p`
    font-size: var(--size-small);
    font-family: var(--font-secondary);
    color: var(--emphasis);
    white-space: nowrap;
`;

export const ArrowMoreIcon = styled.span`
    width: 12px;
    height: 12px;
    border: solid var(--emphasis);
    border-radius: 3px;
    border-width: 4px 0 0 4px; 
    transform: rotate(135deg);
    `;