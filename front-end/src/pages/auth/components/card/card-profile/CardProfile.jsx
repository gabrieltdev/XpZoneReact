import * as S from "./CardProfileStyled"
import { UserAvatar } from "../../user-avatar/UserAvatar"
import { UserRank } from "../../user-rank/UserRank.jsx";

export function CardProfile({ img, path, gamesList, consoles, nickname, countGames, rank, id }) {
const hasNoGames = !gamesList || gamesList.length === 0;

const excessGames = (() => {
    if (countGames > 8) {
        return countGames - 8;
    } else {
        return 0
    }
})();

    return(
        <S.MainStyled>
            <S.PrimaryRow>
                <UserAvatar link={path} size="big" img={img} id={id}/>
                <S.TextContainer>
                    <S.Nickname>{nickname}</S.Nickname>
                            <S.ConsoleTextContainer>
                                <S.NameConsole>
                                    {consoles[0]?.name_console || "Nenhum console"}</S.NameConsole>
                                    <S.CircleSeparator/>
                                <S.NameConsole>
                                    {consoles[1]?.name_console}</S.NameConsole>
                            </S.ConsoleTextContainer>
                </S.TextContainer>
                <UserRank level={rank}/>
            </S.PrimaryRow>
            <S.Separator/>
            <S.SecondaryRow>
                {hasNoGames ? (
                    <S.TextNotGames>Nenhum jogo aqui por enquanto</S.TextNotGames>
                    ) : (
                    gamesList?.slice(0, 8).map((item) => (
                            <S.GameName key={item.id}
                                >{item.name}</S.GameName>
                    ))
                )}
                {(excessGames > 0) && (<S.GameCount>+{excessGames} Jogos</S.GameCount>)}
            </S.SecondaryRow>
        </S.MainStyled>
    )
}