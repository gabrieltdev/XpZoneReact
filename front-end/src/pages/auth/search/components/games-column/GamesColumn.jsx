import * as S from "./GamesColumnStyled";
import { GameCard } from "../../../components/card/card-game/GameCard";
import { useSearchParams } from "react-router-dom";
 
export function GamesColumn({ gameList, loading }) {
const hasNoGames = !gameList || gameList.length === 0;

const [searchParams, setSearchParams] = useSearchParams();

const handleSelectChange = (propName, value) => {
    if (value) {
        searchParams.set(propName, value);
    } else {
            searchParams.delete(propName);
        }
    setSearchParams(searchParams);
};

console.log(gameList)

    return(
        <S.MainStyled>
            <S.FilterContainer>
                <S.Order 
                    id="order-select"
                    value={searchParams.get("orderBy") || ""}
                    onChange={(e) => handleSelectChange("orderBy", e.target.value)}
                >
                    <S.Content value="">Ordenar</S.Content>
                    <S.Content value="latest">Mais recente</S.Content>
                    <S.Content value="oldest">Mais antigo</S.Content>
                    <S.Content value="farAway">Mais longe</S.Content>
                    <S.Content value="closer">Mais perto</S.Content>
                </S.Order>
            </S.FilterContainer>
            {loading ? (
                    <S.LoadingDots><span></span><span></span><span></span></S.LoadingDots>
                ) : (
                <S.GamesContainer>
                    {hasNoGames ? (
                        <S.TextNotGames>Nenhum jogo aqui por enquanto</S.TextNotGames>
                    ) : (
                        gameList.map((item) => (
                        <GameCard
                            key={item.id}
                            img={item.image_url}
                            title={item.name}
                            km={item.distance ? parseFloat(item.distance).toFixed(1) : "0"}
                            state={item.condition}
                            format={item.trade_type}
                        />
                        ))
                    )}
                </S.GamesContainer>
            )}
        </S.MainStyled>
    )
}