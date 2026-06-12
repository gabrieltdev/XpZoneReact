import * as S from "./AuthSection.js";
import { AuthProviders } from "../auth-providers/AuthProviders.jsx";
import { Separator } from "./StyleSeparator.js";

export function AuthSection({ title, description, separatorText, sign }) {
    return (
        <S.ContainerSection>
            <img src="/logotipo.png" alt="Logotipo do marketplace xpzone" />
            <h1>{title}</h1>
            <p>{description}</p>
            <S.ContainerLogin>
                <AuthProviders sign={sign} text="Gmail" img="/Symbol.svg.png" />
                <AuthProviders sign={sign} $theme="light" text="Facebook" img="/g10.png" />
            </S.ContainerLogin>
            <Separator>{separatorText}</Separator>
        </S.ContainerSection>
    )
}