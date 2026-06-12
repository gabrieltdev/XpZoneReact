import * as S from './CountGamesConsoleStyled'
import { SeeMoreButton } from '../../../components/button/see-more-button/SeeMoreButton'
import { useInfoById } from '../../../../../utils/useInfoById'; 
import { GamesConsoleCount } from '../../../../../services/game';

export function CountGamesByConsole() {
const { info: ps5Games, loading:loadingPs5 } = useInfoById(GamesConsoleCount, 1);
const { info: xboxGames, loading:loadingXbox } = useInfoById(GamesConsoleCount, 3);

    return(
        <S.MainStyled>
            <S.TextContainer>
                <S.Title>Jogos próximos a você</S.Title>
                <SeeMoreButton/>
            </S.TextContainer>

            <S.ConsolesContainer>
                <S.CardConsole>
                    <S.TitleCard>PlayStation 5</S.TitleCard>
                    <S.TextCard>
                        {loadingPs5 ? (
                        <S.LoadingDots><span></span><span></span><span></span></S.LoadingDots>
                    ) : (
                        `${ps5Games.total} Jogos`
                    )}
                    </S.TextCard>
                </S.CardConsole>
                <S.CardConsole img="secondary">
                    <S.TitleCard>Xbox Series X</S.TitleCard>
                    <S.TextCard>{
                        loadingXbox ? (
                        <S.LoadingDots><span></span><span></span><span></span></S.LoadingDots>
                    ) : (
                        `${xboxGames.total} Jogos`
                    )}
                    </S.TextCard>
                </S.CardConsole>
            </S.ConsolesContainer>
        </S.MainStyled>
    )
}