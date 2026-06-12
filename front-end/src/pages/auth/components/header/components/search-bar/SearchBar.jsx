import * as S from "./SearchBarStyled"
import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Search } from "lucide-react"
import { useFilterInfo } from "../../../../../../utils/useFilterInfo"
import { CitiesOptions } from "../../../../../../services/game"
import { useUser } from '../../../../../../context/user-context/UserContext';

export function SearchBar() {
const { info: citiesList } = useFilterInfo(CitiesOptions);

const navigate = useNavigate();
const { user } = useUser();

// city filter
const [searchParams, setSearchParams] = useSearchParams();

useEffect(() => {
        if (user?.city && !searchParams.has("city")) {
            searchParams.set("city", user.city);
            setSearchParams(searchParams);
        }
    }, [user, searchParams, setSearchParams]);

const filterCity = (currentCity) => {
    if (currentCity) {
        searchParams.set("city", currentCity); 
    } else {
        searchParams.delete("city"); 
    }

    setSearchParams(searchParams); 
};

// search
const [tempSearch, setTempSearch] = useState(searchParams.get("search") || "");

const handleSearchSubmit = (e) => {
    e.preventDefault();

    const newFilter = new URLSearchParams();
    if (user?.city) {
        newFilter.set("city", user.city);
    } 
    else if (searchParams.has("city")) {
        newFilter.set("city", searchParams.get("city"));
    }

    if (tempSearch) {
        newFilter.set("search", tempSearch);
    }

    navigate(`/app/home/search?${newFilter.toString()}`);
};

    return(
    <S.BarContainer>
        <S.FilterSearch
            value={searchParams.get("city") || ""} 
            onChange={(e) => filterCity(e.target.value)}
        >
            {citiesList.map((item) => (
                <S.CityText value={item.city} key={item.city}>{item.city}</S.CityText>
            ))}
        </S.FilterSearch>

        <S.Separator/>

        <S.SearchContainer onSubmit={handleSearchSubmit}>
            <S.Search 
                type="text" 
                placeholder='O que deseja hoje?'
                value={tempSearch}
                onChange={(e) => setTempSearch(e.target.value)}
            />

            <S.SearchButton type="submit"><Search size={20}/></S.SearchButton>
        </S.SearchContainer>
    </S.BarContainer>
    )
}