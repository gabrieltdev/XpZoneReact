import * as S from "./SectionStyle4"
import * as T from "../TypographyStyles"

export function Section4({ text }) {
  return (
    <S.Section>
      <T.SubTitle>{text.title}</T.SubTitle>
      
      <S.Container>
        <S.IconContainer>
          <S.Icon src="/ic-pesquise.svg"/>
          <T.TextSmall>
            {text.description1}
          </T.TextSmall>
        </S.IconContainer>

        <S.IconContainer>
          <S.Icon src="/ic-pesquise.svg"/>
          <T.TextSmall>
            {text.description2}
          </T.TextSmall>
        </S.IconContainer>

        <S.IconContainer>
          <S.Icon src="/ic-pesquise.svg"/>
          <T.TextSmall>
            {text.description3}
          </T.TextSmall>
        </S.IconContainer>

        <S.IconContainer>
          <S.Icon src="/ic-pesquise.svg"/>
          <T.TextSmall>
            {text.description4}
          </T.TextSmall>
        </S.IconContainer>

        <S.IconContainer>
          <S.Icon src="/ic-pesquise.svg"/>
          <T.TextSmall>
            {text.description5}
          </T.TextSmall>
        </S.IconContainer>
      </S.Container>
    </S.Section>
  )
}