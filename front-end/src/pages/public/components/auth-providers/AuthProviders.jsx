import * as S from "./StyleAuth";

export function AuthProviders({ text, img, $theme, sign }) {
    //bottons of autenthication google's and facebook
    return (
        <S.StyleAuth $theme={$theme}>
            <a href="#">
                <img src={img} alt= {`Icone do ${text}`} />
                <S.Text>{sign} {text}</S.Text>
            </a>
        </S.StyleAuth>
    );
}