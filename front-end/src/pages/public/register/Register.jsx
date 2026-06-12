import * as S from "./ContainerStyle.js";
import translate from "../../../locales/translate.json";
import { AuthSection } from "../components/auth-section/AuthSection.jsx";
import { RegisterForm } from "../components/forms/register-form/RegisterForm.jsx";
import { useLanguage } from "../../../context/context-language/LanguageContext.js";

export function Register() {
// translate
const { lang } = useLanguage();
const t = translate[lang];

  return (
    <>
      <AuthSection
        sign={t.publicLayout.authLayout.register.signWith}
        title={t.publicLayout.authLayout.register.title}
        description={t.publicLayout.authLayout.register.description}
        separatorText={t.publicLayout.authLayout.register.separatorText}
      ></AuthSection>

      <>
        <RegisterForm />
      </>

      <footer>
        <S.TermsAndConditions>
          {t.publicLayout.authLayout.register.textTerms1}
          <S.Text href="#">{t.publicLayout.authLayout.register.terms}</S.Text>
          {t.publicLayout.authLayout.register.textTerms2}
          <S.Text href="#">{t.publicLayout.authLayout.register.policy}</S.Text>
        </S.TermsAndConditions>
      </footer>
    </>
  );
}
