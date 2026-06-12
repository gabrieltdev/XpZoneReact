import styled from "styled-components";

export const MainStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 382px;
    height: 245px;
    background-color: var(--special);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 0 10px;
    overflow: hidden;
    user-select: none;
`;

export const PrimaryRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 40%;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    gap: 10px;
`;

export const Nickname = styled.p`
    font-family: var(--font-primary);
    font-size: var(--size-medium);
    font-weight: var(--font-weight-bold);
    color: var(--contrast-white);
`;

export const ConsoleTextContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`;

export const CircleSeparator = styled.span`
    border: none;
    background-color: var(--icons);
    width: 3px;
    height: 3px;
    border-radius: 50%;
`;

export const NameConsole = styled.p`
    font-family: var(--font-secondary);
    font-size: var(--size-small);
    font-weight: var(--font-weight-regular);
    color: var(--icons);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const LevelContainer = styled.div`
    display: flex;
    border: 1px solid var(--secondary);
    border-radius: 5px;
    width: 100px;
    height: 40px;
`;

export const LevelText = styled.p`
    font-family: var(--icons);
`;

export const LevelImage = styled.img`
    
`;

export const Separator = styled.hr`
    border: none;
    background-color: var(--border);
    width: 100%;
    height: 1px;
    margin-bottom: 15px;
`;

export const SecondaryRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 50%;
    gap: 10px;
`;

export const GameContainer = styled.div`
    display: flex;
`;

export const GameName = styled.p`
    display: flex;
    align-items: center;
    border: 1px solid var(--border);
    border-radius: 20px;
    padding: 0 10px;
    max-width: 23%;
    height: 30px;
    font-family: var(--font-secondary);
    font-size: var(--size-small);
    font-weight: var(--font-weight-regular);
    color: var(--icons);
    white-space: nowrap;
    overflow: hidden;
`;

export const GameCount = styled.p`
    display: flex;
    align-items: center;
    border: 1px solid var(--emphasis);
    border-radius: 20px;
    padding: 0 10px;
    width: 70px;
    height: 30px;
    font-family: var(--font-secondary);
    font-size: var(--size-small);
    font-weight: var(--font-weight-regular);
    color: var(--emphasis);
    white-space: nowrap;
    overflow: hidden;
`;

export const TextNotGames = styled.p`
    font-size: var(--size-medium);
    font-family: var(--font-primary);
    color: var(--fourth);
    font-weight: var(--font-weight-bold);
`;