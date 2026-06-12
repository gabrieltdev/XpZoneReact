import * as S from "./ColumnContainer";
import * as T from "../../TypographyStyle";
import { SelectLanguage } from "../select-language/SelectLanguage";
import { Link } from "react-router-dom";
import { useLanguage } from "../../../../../context/context-language/LanguageContext";

export function PrimaryColumn({ text }) {
// translate
const { lang, setLang } = useLanguage();

  return (
    <S.Container>
      <T.Title>{text.title}</T.Title>
      <SelectLanguage lang={lang} setLang={setLang} />
      <S.LinksContainer>
        <a href="#">
          <img src="/ic-insta.svg" alt="Logo do instagram"></img>
        </a>
        <a href="#">
          <img src="/ic-facebook.svg" alt="Logo do facebook"></img>
        </a>
        <a href="#">
          <img src="/ic-linkedin.svg" alt="Logo do linkedin"></img>
        </a>
        <a href="#">
          <img src="/ic-youtube.svg" alt="Logo do youtube"></img>
        </a>
      </S.LinksContainer>
    </S.Container>
  );
}
