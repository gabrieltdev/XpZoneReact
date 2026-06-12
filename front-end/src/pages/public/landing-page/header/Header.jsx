import * as S from "./StyleHeader.js"
import { Link } from "react-router-dom"
import { ButtonTransparent } from "../../../components/buttons/button-transparent/ButtonTransparent.jsx"
import { ButtonOrange } from "../../../components/buttons/button-orange/ButtonOrange.jsx"

export function Header({ text }) {
  return (
    <S.Container>
      <img src="/logotipo.png" alt="Logo da xpzone" />
      <S.ButtonContainer>
        <Link to="/auth/login">
          <ButtonTransparent>{text.buttonLogin}</ButtonTransparent>
        </Link>

        <Link to="/auth/register">
          <ButtonOrange>{text.buttonRegister}</ButtonOrange>
        </Link>
      </S.ButtonContainer>
    </S.Container>
  )
}