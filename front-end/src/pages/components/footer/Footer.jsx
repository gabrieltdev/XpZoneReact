import * as S from "./ContainerStyle.js";
import { Copyright } from "../copyright/Copyright.jsx";
import { Content } from "./content/Content.jsx";
import translate from "../../../locales/translate.json";
import { useLanguage } from "../../../context/context-language/LanguageContext.js";

export function Footer({ link }) {
// translate
const { lang } = useLanguage();
const t = translate[lang];

  return (
    <S.FooterBlur>
      <S.FooterContainer>
        <Content text={t.publicLayout.landingPage.footer} />
        <S.Separator />
        <Copyright link={link} text={t.publicLayout.landingPage.footer} />
      </S.FooterContainer>
    </S.FooterBlur>
  );
}
