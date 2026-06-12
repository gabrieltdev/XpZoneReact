import * as T from '../footer/TypographyStyle.js'
import * as S from './CopyrightStyle.js'
import { ButtonOrange } from '../buttons/button-orange/ButtonOrange.jsx'
import { Link } from 'react-router-dom';

export function Copyright({ text,link }) {
    return (
        <S.FooterCopyright>
            <img src="/logotipo.png" alt="Logo da empresa" />
            <T.Copyright>{text.copyright}</T.Copyright>
            <Link to={link}>
                <ButtonOrange $size="$auth">{text.buttonRegister}</ButtonOrange>
            </Link>
        </S.FooterCopyright>
    )
}