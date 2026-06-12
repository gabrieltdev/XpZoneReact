import * as S from "./GamesBarStyled";
import { GameCard } from "../card/card-game/GameCard";
import { SeeMoreButton } from "../button/see-more-button/SeeMoreButton";

export function GamesBar({ gameList, title, loading }) {
  const hasNoGames = !gameList || gameList.length === 0;

  return (
    <S.MainStyled>
      <S.Container>
        <S.TextContainer>
          <S.Title>{title}</S.Title>
          <SeeMoreButton />
        </S.TextContainer>

        {loading ? (
                  <S.LoadingDots>
                    <span />
                    <span />
                    <span />
                  </S.LoadingDots>
                    ) : (
          <S.CardContainer>
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
          </S.CardContainer>
                    )}
      </S.Container>
    </S.MainStyled>
  );
}
