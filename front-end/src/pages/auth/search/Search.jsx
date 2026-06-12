import * as S from "./SearchStyled"
import { useSearchParams } from "react-router-dom"
import { FilterColumn } from "./components/filter-column/FilterColumn"
import { GamesColumn } from "./components/games-column/GamesColumn"
import { useSearchGames } from "../../../utils/useSearchGames"
import { useFilterInfo } from '../../../utils/useFilterInfo'; 
import { FilterSummary, SearchGames } from '../../../services/game';

export function Search() {
const { info: summary, loading:loadingSummary} = useFilterInfo(FilterSummary);

const [searchParams] = useSearchParams();

const filters = {
    city: searchParams.get("city") || "",
    search: searchParams.get("search") || "",
    consoles: searchParams.get("consoles") || "",
    trade_type: searchParams.get("trade_type") || "",
    condition: searchParams.get("condition") || "",
    orderBy: searchParams.get("orderBy") || ""
};

const { info: games, loading:loading} = useSearchGames(filters);

const result = games.length;

const tradeType = summary?.byTradeType || [];
const consoles = summary?.byConsole || [];
const condition = summary?.byCondition || [];

    return (
        <S.MainStyled>
            <FilterColumn gameList={games} result={result} tradeType={tradeType} consoles={consoles} condition={condition} loading={loadingSummary}/>
            <GamesColumn gameList={games} loading={loading}/>
        </S.MainStyled>
    )
}