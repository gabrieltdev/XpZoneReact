import * as S from "./ButtonStyle.js";

export function ButtonOrange({ children, $size ,type }) {
    return (
        <S.StyledButton type={type} $size={$size}>
            {children}
        </S.StyledButton>
    );
}