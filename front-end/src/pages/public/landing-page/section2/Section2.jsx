import * as S from "./SectionStyle2"
import * as T from "../TypographyStyles"
import { Link } from "react-router-dom"
import { ButtonOrange } from "../../../components/buttons/button-orange/ButtonOrange"

export function Section2({ text }) {
  return (
    <S.Section>
      <S.ImageSection>
        <S.Image src="/Sonic.png"></S.Image>
      </S.ImageSection>
      <S.TextSection>
        <T.SubTitle>
          {text.title}
        </T.SubTitle>

        <T.Text>
          {text.description1}
            <T.Highlight>
              {text.descriptionHighLight}
            </T.Highlight>
          {text.description2}
        </T.Text>

        <S.ListSection>

            <S.List>
              <S.Icon></S.Icon>
              <T.Text>
                {text.textList1}
              </T.Text>
            </S.List>

             <S.List>
              <S.Icon></S.Icon>
              <T.Text>
                {text.textList2}
              </T.Text>
            </S.List>

             <S.List>
              <S.Icon></S.Icon>
              <T.Text>
                {text.textList3}
              </T.Text>
            </S.List>

             <S.List>
              <S.Icon></S.Icon>
              <T.Text>
                {text.textList4}
              </T.Text>
            </S.List>

        </S.ListSection>

        <Link to="/auth/register">
          <ButtonOrange>
            {text.button}
          </ButtonOrange>
        </Link>
      </S.TextSection>
    </S.Section>
  )
}