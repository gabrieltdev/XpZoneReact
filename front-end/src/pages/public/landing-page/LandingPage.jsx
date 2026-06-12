import translate from "../../../locales/translate.json";
import { useLanguage } from "../../../context/context-language/LanguageContext";
import * as S from "./LandingStyle";
import { Header } from "./header/Header";
import { Section1 } from "./section1/Section1";
import { Section2 } from "./section2/Section2";
import { Section3 } from "./section3/Section3";
import { Section4 } from "./section4/Section4";
import { Section5 } from "./section5/Section5";
import { Section6 } from "./section6/Section6";
import { Footer } from "../../components/footer/Footer";

export function LandingPage() {
// translate
const { lang } = useLanguage();
const t = translate[lang];

  return (
    <S.Background>
      <S.Centralizar>
        <Header text={t.publicLayout.landingPage.header} />
        <Section1 text={t.publicLayout.landingPage.section1} />
        <Section2 text={t.publicLayout.landingPage.section2} />
        <Section3 text={t.publicLayout.landingPage.section3} />
        <Section4 text={t.publicLayout.landingPage.section4} />
        <Section5 text={t.publicLayout.landingPage.section5} />
        <Section6 text={t.publicLayout.landingPage.section6} />
        <Footer link="/auth/register"/>
      </S.Centralizar>
    </S.Background>
  );
}
