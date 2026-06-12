import * as S from "./GameCardStyled"

export function GameCard({ title, km, state, format, img }) {


    return(
        <S.MainStyled href="#">
            <S.CardContainer>
                <S.ImageCard src={img}/>
                <S.Title>{title}</S.Title>
                <S.InfoContainer>
                    <S.Distance>{km}km de distância</S.Distance>
                    <S.Container>
                        <S.State>{state}</S.State>
                        <S.SaleFormat>{format}</S.SaleFormat>
                    </S.Container>
                </S.InfoContainer>
            </S.CardContainer>
        </S.MainStyled>
    )
}