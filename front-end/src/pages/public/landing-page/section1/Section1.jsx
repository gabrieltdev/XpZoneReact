import * as S from "./SectionStyle1"
import * as T from "../TypographyStyles"

export function Section1({ text }) {
  return (
    <S.Section>
      <S.TextSection>
        
        <T.Title>&gt;&gt; <T.TextWhite>{text.titleHighLight}</T.TextWhite><br/>
        {text.title}
        </T.Title>

        <T.Text>
          {text.description}
        </T.Text>

      </S.TextSection>
      <S.LogoSection>
        <img src="logos.png"></img>
      </S.LogoSection>
    </S.Section>
  )
}