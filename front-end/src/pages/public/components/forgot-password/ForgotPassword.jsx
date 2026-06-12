import * as S from "./StyleForgot.js";

export function ForgotPassword({ text }) {

    return (
        <S.ForgotPassword href="#">
            {text.forgot}
        </S.ForgotPassword>
    )
}