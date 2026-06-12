import styled from "styled-components";

export const PasswordContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const StyledContainer = styled.div`
    position: relative;
    justify-content: center;
`;

export const StyledLabel = styled.label`
    font-size: var(--size-small);
    color: var(--contrast-white);
    margin-bottom: 8px;
`;

export const StyledInput = styled.input`
    padding: 0px 20px;    
    background-color: var(--primary);
    width: ${({$size}) => $size === "big" ? "416px" : "180px"};
    height: 45px;
    border: 1px solid var(--secondary);
    border-radius: 5px;
    font-size: var(--size-small);
    color: var(--contrast-white);
`;

export const ShowPassword = styled.button`
    position: absolute;
    right: 12px;
    bottom: 13px;
    
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    color: var(--secondary);
    
    &:hover {
      color: var(--terciary);
    }
`;