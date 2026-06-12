import * as S from "./StyleRemember.js";

export function RememberMe({ text }) {
    return (
        <S.RememberMe>
            <input
                type="checkbox"
            />
            {text.remember}
            <S.CustomCheckbox></S.CustomCheckbox>
        </S.RememberMe>
    )
}