import * as S from "./SeeMoreButtonStyled";

export function SeeMoreButton({ link }) {
    return (
            <S.StyledMoreButton to={link}>
                <S.ArrowMoreIcon />
                <S.Text>Ver mais</S.Text>
            </S.StyledMoreButton>
    );
}