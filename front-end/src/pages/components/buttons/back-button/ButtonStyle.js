import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledBackButton = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 32px;

    &:hover {
        opacity: 0.7;
    }
    `;

export const ArrowBackIcon = styled.span`
    display: inline-block;
    width: 12px;
    height: 12px;
    border: solid var(--emphasis);
    border-width: 3px 0 0 3px; 
    transform: rotate(-45deg); 
    margin-top: 2px;
    `;