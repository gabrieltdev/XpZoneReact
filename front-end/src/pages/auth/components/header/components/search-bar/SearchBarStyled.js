import styled from "styled-components";

export const BarContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: #413653;
    border-radius: 3px;
    padding: 0px 20px;
    width: 800px;
    height: 56px;
`;

export const FilterSearch = styled.select`
    border: none;
    font-family: 'Open Sans';
    margin-right: 16px;
    font-size: 20px;
    font-weight: 400;
    background-color: transparent;
    color: #a3a3a3;
    width: 250px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: var(--size-medium);

    &&:focus, textarea:focus, select:focus {
    outline: none;
    box-shadow: none;
    }
`;

export const CityText = styled.option`
    font-size: var(--size-medium);
    background-color: var(--tertiary);
    color: var(--contrast-white);

    &&:hover {
  background-color: #ebf8ff;
}
`;

export const Separator = styled.hr`
    border: none;
    background-color: #a3a3a3;
    height: 30px;
    width: 2px;
    margin: 10px 0;
`;

export const SearchContainer = styled.form`
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
`;

export const Search = styled.input`
    border: none;
    font-family: 'Open Sans';
    padding-left: 20px;
    width: 100%;
    border-radius: 4px;
    font-weight: 400;
    font-size: 20px;
    background-color: #413653;
    color: var(--contrast-white);
    font-size: var(--size-medium);

    &&:focus, textarea:focus, select:focus {
    outline: none;
    box-shadow: none;
    }
`;

export const SearchButton = styled.button`
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