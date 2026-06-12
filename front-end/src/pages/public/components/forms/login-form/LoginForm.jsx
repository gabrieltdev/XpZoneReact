import * as S from "./LoginFormStyle.js";
import translate from "../../../../../locales/translate.json";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../../../context/user-context/UserContext.js"
import { useState } from "react";
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
import { loginUser } from "../../../../../services/user.js";
import { ButtonTransparent } from "../../../../components/buttons/button-transparent/ButtonTransparent";
import { ButtonOrange } from "../../../../components/buttons/button-orange/ButtonOrange";
import { InputForm } from "../../../components/input-form/InputForm.jsx";
import { InputPassword } from "../../../components/input-password/InputPassword.jsx";
import { ForgotPassword } from "../../../components/forgot-password/ForgotPassword";
import { RememberMe } from "../../../components/remember-me/RememberMe.jsx";
import { useLanguage } from "../../../../../context/context-language/LanguageContext.js";

export function LoginForm() {
// translate
const { lang } = useLanguage();
const t = translate[lang];

// errors ,conditions and ApiErrors
const { register, handleSubmit, formState: { errors } } = useForm();
const [apiError, setApiError] = useState("");

// user data for use in the app
const { setUser } = useUser();

// redirect pages
const navigate = useNavigate();

// login logic
const onSubmit = async (data) => {
    try {
        setApiError("");
        const result = await loginUser(data);
        // token
        localStorage.setItem("token", result.token);
        localStorage.setItem("user", JSON.stringify(result.user));

        setUser(result.user)

        navigate("/app/home", { replace: true });
    } catch (error) {
        console.error("Erro ao encontrar o usuário:", error);
        const messageServer = error.response?.data?.error || "Erro de conexão";
        setApiError(messageServer);
    }
};

    return (
        <S.Form onSubmit={handleSubmit(onSubmit)} noValidate>
          <InputForm
              name="email"
              $size="big"
              label={t.publicLayout.authLayout.login.label1}
              type="email"
              placeholder={t.publicLayout.authLayout.login.placeHolder1}
              register={register}
              rules={{ 
                  required: `${t.publicLayout.authLayout.login.warnings.emailRequired}`,
                  pattern: {
                      value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,5}$/i,
                      message: `${t.publicLayout.authLayout.login.warnings.emailInvalid}`
                      }
                  }}
          />

          <InputPassword
            name="password"
            $size="big"
            label={t.publicLayout.authLayout.login.label2}
            placeholder={t.publicLayout.authLayout.login.placeHolder2}
            register={register}
            rules={{ 
                required: `${t.publicLayout.authLayout.login.warnings.passwordRequired}`,
                minLength: `${t.publicLayout.authLayout.login.warnings.passwordLength}` 
            }}
          />
          {(errors.email?.message || errors.password?.message || apiError) && (
            <S.Warning >{errors.email?.message || errors.password?.message || apiError}</S.Warning>
          )}

          <S.ContainerPassword>
            <RememberMe text={t.publicLayout.authLayout.login} />

            <ForgotPassword text={t.publicLayout.authLayout.login} />
          </S.ContainerPassword>

          <S.ContainerButtons>
            <Link to="/auth/register">
              <ButtonTransparent type="button" $size="auth">
                {t.publicLayout.authLayout.login.buttonRegister}
              </ButtonTransparent>
            </Link>

            <ButtonOrange type="submit">
              {t.publicLayout.authLayout.login.buttonLogin}
            </ButtonOrange>
          </S.ContainerButtons>
        </S.Form>
    )
}