import * as S from "./FilterColumnStyled";
import { useSearchParams } from "react-router-dom";

export function FilterColumn({ tradeType, consoles, condition, loading, result, gameList }) {
const [searchParams, setSearchParams] = useSearchParams();
const search = searchParams.get("search") || "Todos";

const handleFilterChange = (propName, value, isChecked) => {
    const currentParams = searchParams.get(propName) 
        ? searchParams.get(propName).split(",").filter(Boolean).map(item => item.toString().trim()) 
        : [];

    const stringValue = value.toString().trim();

    let newParams;
    if (isChecked) {
        newParams = [...currentParams, stringValue];
    } else {
        newParams = currentParams.filter(item => item !== stringValue);
    }

    const cleanParams = [...new Set(newParams)].filter(Boolean);

    if (cleanParams.length > 0) {
        searchParams.set(propName, cleanParams.join(","));
    } else {
        searchParams.delete(propName);
    }

    setSearchParams(searchParams);
};

    return(
        <S.MainStyled>
            <S.TextResult>({result || 0}) resultados</S.TextResult>
            <S.TitleGame>{search}</S.TitleGame>
            <S.FilterListContainer>
                {loading ? (
                    <S.LoadingDots>
                        <span />
                        <span />
                        <span />
                    </S.LoadingDots>
                        ) : (
                    <S.FilterContainer>
                        <S.TitleFilter>Tipo de anúncio</S.TitleFilter>
                            {tradeType.map((item) => {
                                const countGamesTrade = gameList.filter(
                                    (game) => game.trade_type === item?.trade_type
                                ).length;

                                return (
                                    <S.TextContainer key={item?.trade_type}>
                                        <input
                                            type="checkbox"
                                            onChange={(e) => handleFilterChange("trade_type", item?.trade_type, e.target.checked)}
                                        />
                                        <S.CustomCheckbox />
                                        <S.TextFilter>{item?.trade_type}</S.TextFilter>
                                        <S.TextCount>
                                            ({loading ? '...' : countGamesTrade})
                                        </S.TextCount>
                                    </S.TextContainer>
                                );
                            })}
                    </S.FilterContainer>
                )}

                {loading ? (
                    <S.LoadingDots>
                        <span />
                        <span />
                        <span />
                    </S.LoadingDots>
                        ) : (
                    <S.FilterContainer>
                        <S.TitleFilter>Plataforma</S.TitleFilter>
                        {consoles.map((item) => {
                            const countGamesConsoles = gameList.filter(
                                (game) => game.console_id === item?.console_id
                            ).length;

                            return (
                                <S.TextContainer key={item?.consoles}>
                                    <input
                                        type="checkbox"
                                        onChange={(e) => handleFilterChange("consoles", item?.console_id, e.target.checked)}
                                    />
                                    <S.CustomCheckbox />
                                    <S.TextFilter>{item?.console.name_console}</S.TextFilter>
                                    <S.TextCount>
                                        ({loading ? '...' : countGamesConsoles})
                                    </S.TextCount>
                                </S.TextContainer>
                            );
                        })}
                    </S.FilterContainer>
                )}

                {loading ? (
                    <S.LoadingDots>
                        <span />
                        <span />
                        <span />
                    </S.LoadingDots>
                        ) : (
                    <S.FilterContainer>
                        <S.TitleFilter>Condição</S.TitleFilter>
                        {condition.map((item) => {
                            const countGamesCondition = gameList.filter(
                                (game) => game.condition === item?.condition
                            ).length;

                            return (
                                <S.TextContainer key={item?.condition}>
                                    <input
                                        type="checkbox"
                                        onChange={(e) => handleFilterChange("condition", item?.condition, e.target.checked)}
                                    />
                                    <S.CustomCheckbox />
                                    <S.TextFilter>{item?.condition}</S.TextFilter>
                                    <S.TextCount>
                                        ({loading ? '...' : countGamesCondition})
                                    </S.TextCount>
                                </S.TextContainer>
                            );
                        })}
                    </S.FilterContainer>
                )}
            </S.FilterListContainer>
        </S.MainStyled>
    )
}