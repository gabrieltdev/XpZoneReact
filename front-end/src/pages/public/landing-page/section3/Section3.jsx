import * as S from "./SectionStyle3"
import * as T from "../TypographyStyles"

export function Section3({ text }) {
  return (
    <S.Section>
        <S.TextSection>
          <T.SubTitle>
            {text.title}
          </T.SubTitle>

          <T.Text>
            <T.Highlight>
              {text.descriptionHighLight}
            </T.Highlight>
              {text.description}
          </T.Text>
          
          <S.BoxContainer>

            <S.ProgressContainer>
              <T.SubTitleSmall>
                {text.titleBox}
                  <T.TextWhite>
                    {text.titleBoxHighLight}
                  </T.TextWhite>
              </T.SubTitleSmall>
              
                <S.XpBarContainer>
                  <S.XpBar>
                    <S.Progress></S.Progress>
                  </S.XpBar>
                </S.XpBarContainer>

              <T.TextSmall>
                <T.Highlight>
                  {text.descriptionBox}
                </T.Highlight>
              </T.TextSmall>
            </S.ProgressContainer>

            <S.BoxMedium></S.BoxMedium>

            <S.BoxSmall></S.BoxSmall>

          </S.BoxContainer>
        </S.TextSection>

        <S.ImageSection>
          <S.Image src="/spiderMan.png" alt="Homen aranha" />
        </S.ImageSection>
    </S.Section>
  )
}