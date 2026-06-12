import { Link } from "react-router-dom"
import { ButtonOrange } from "../../../components/buttons/button-orange/ButtonOrange"
import * as S from "./SectionStyle6"
import * as T from "../TypographyStyles"

export function Section6 ({ text }) {
    return (
        <S.Section>
            <S.CardSection>
                <S.Image src="/card.png"></S.Image>
            </S.CardSection>
            <S.TextSection>
                <T.SubTitle>
                    <T.TextWhite>
                        {text.titleHighLight}
                    </T.TextWhite>
                        {text.title}
                </T.SubTitle>

                <T.Text>
                    {text.description1_1}<T.Highlight>{text.descriptionHighLight}</T.Highlight>{text.description1_2}
                </T.Text>

                <T.Text>
                    {text.description2}
                </T.Text>

                <Link to="/auth/register">
                    <ButtonOrange>
                        {text.button}
                    </ButtonOrange>
                </Link>
            </S.TextSection>
        </S.Section>
    )
}