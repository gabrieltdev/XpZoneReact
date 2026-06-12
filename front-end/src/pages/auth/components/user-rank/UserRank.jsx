import * as S from "./UserRankStyled";

const Rank_config = {
    1: { name: "Prata", url: "/Prata.png" },
    2: { name: "Ouro", url: "/Ouro.png" },
    3: { name: "Mestre", url: "/Mestre.png" }
};

export function UserRank({ level }) {
const currentRank = Rank_config[level] || { name: "Prata", url: "/Prata.png" };

    return(
        <S.LevelContainer>
            <S.LevelImage src={currentRank.url} alt={currentRank.name}/>
            <S.LevelText>{currentRank.name}</S.LevelText>
        </S.LevelContainer>
    )
}