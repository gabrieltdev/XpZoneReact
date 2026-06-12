import * as S from './ButtonStyle.js';

export function ButtonTransparent({ type, children, $size }) {
    return (
        <S.StyledButton type={type} $size={$size}>
            {children}
        </S.StyledButton>
    );
}