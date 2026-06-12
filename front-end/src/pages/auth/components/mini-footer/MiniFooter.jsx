import * as S from "./MiniFooterStyle"
import translate from "../../../../locales/translate.json"
import { Copyright } from "../../../components/copyright/Copyright";
import { useLanguage } from "../../../../context/context-language/LanguageContext.js";

export function MiniFooter() {
const { lang } = useLanguage();
const t = translate[lang];

    return (
        <S.FooterContainer>
            <Copyright link="/app/product-profile" text={t.publicLayout.landingPage.footer}/>
        </S.FooterContainer>
    );
}