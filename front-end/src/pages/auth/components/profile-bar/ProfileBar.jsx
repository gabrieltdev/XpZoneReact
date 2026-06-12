import * as S from "./ProfileBarStyled";
import { CardProfile } from "../card/card-profile/CardProfile";
import { SeeMoreButton } from "../button/see-more-button/SeeMoreButton";

export function ProfileBar({ usersList, title, loading }) {
  const hasNoUsers = !usersList || usersList.length === 0;
  const path = "/app/profile/";

  return (
    <S.MainStyled>
      <S.Container>
        <S.TextContainer>
          <S.Title>{title}</S.Title>
          <SeeMoreButton/>
        </S.TextContainer>

        {loading ? (
          <S.LoadingDots>
            <span />
            <span />
            <span />
          </S.LoadingDots>
            ) : (
              <S.CardContainer>
                {hasNoUsers ? (
                  <S.TextNotProfiles>
                    Nenhum usuário aqui por enquanto
                  </S.TextNotProfiles>
                    ) : (
                      usersList && usersList.map((item) => (
                        <CardProfile
                          userNickname={item.nickname}
                          id={item.id || item.nickname}
                          rank={item?.level_global}
                          countGames={item?.totalGames}
                          key={item?.id}
                          path={path}
                          img={item?.image_url}
                          nickname={item?.nickname}
                          consoles={item?.consoles}
                          gamesList={item?.games}
                        />
                      ))
                )}
              </S.CardContainer>
                )
        }
      </S.Container>
    </S.MainStyled>
  );
}