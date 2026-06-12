import * as S from "./ContainerStyle.js";
import translate from "../../../locales/translate.json";
import { AuthSection } from "../components/auth-section/AuthSection.jsx";
import { LoginForm } from "../components/forms/login-form/LoginForm.jsx";
import { useLanguage } from "../../../context/context-language/LanguageContext.js";

export function Login() {
// translate
const { lang } = useLanguage();
const t = translate[lang];

  return (
    <>
      <AuthSection
        sign={t.publicLayout.authLayout.login.signWith}
        title={t.publicLayout.authLayout.login.title}
        description={t.publicLayout.authLayout.login.description}
        separatorText={t.publicLayout.authLayout.login.separatorText}
      ></AuthSection>

      <S.ContainerForm>
        <LoginForm />
      </S.ContainerForm>
    </>
  );
}
