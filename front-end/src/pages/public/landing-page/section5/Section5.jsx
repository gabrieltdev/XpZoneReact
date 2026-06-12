import { Link } from "react-router-dom"
import * as S from "./SectionStyle5"
import * as T from "../TypographyStyles"
import { ButtonOrange } from "../../../components/buttons/button-orange/ButtonOrange.jsx"

export function Section5({ text }) {
  return (
    <S.Section>
    <T.SubTitle>{text.title}</T.SubTitle>

    <S.ContentContainer>
      <S.IconGamePad src="/game-controller.png" alt="Icone controle de video game" />

        <S.ImageContainer>
          <S.ImageText src="palavraGamers.png" alt="Palavra gamer" />
          <img src="/gamers.png" alt="Foto de gamers" />
        </S.ImageContainer>

      <S.IconChat src="/chat_messenger.png" alt="Icone de chat"/>
    </S.ContentContainer>

    <Link to="/auth/register">
      <ButtonOrange $size="auth">{text.button}</ButtonOrange>
    </Link>
    </S.Section>
  )
}