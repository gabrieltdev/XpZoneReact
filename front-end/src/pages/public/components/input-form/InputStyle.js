import styled from "styled-components";

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const StyledLabel = styled.label`
    font-size: var(--size-small);
    color: var(--contrast-white);
    margin-bottom: 8px;
`;

export const StyledInput = styled.input`
    padding: 0px 20px;    
    background-color: var(--primary);
    width: ${({$size}) => $size === "big" ? "416px" : "180px"};;
    height: 45px;
    border: 1px solid var(--secondary);
    border-radius: 5px;
    font-size: var(--size-small);
    color: var(--contrast-white);
`;