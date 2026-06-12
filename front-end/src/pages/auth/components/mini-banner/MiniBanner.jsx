import * as S from "./MiniBannerStyled";

export function MiniBanner({ count, miniBannerUrl, title }) {

    return(
        <S.MiniBannerContainer style={{ backgroundImage: `url(${miniBannerUrl})`}}>
            <S.TitleMiniBanner>{title}</S.TitleMiniBanner>
            <S.TextMiniBanner>Os melhores games para {title}</S.TextMiniBanner>
            <S.CountGames>
                <S.ArrowIcon/>
                <S.Text>{`${count}  jogos na sua cidade`}</S.Text>
            </S.CountGames>
        </S.MiniBannerContainer>
    )
}