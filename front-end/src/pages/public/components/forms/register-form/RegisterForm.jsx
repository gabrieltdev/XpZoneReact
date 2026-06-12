import * as S from "./RegisterFormStyle.js";
import translate from "../../../../../locales/translate.json";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { InputPassword } from "../../../components/input-password/InputPassword.jsx";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../../../../services/user.js";
import { InputForm } from "../../../components/input-form/InputForm.jsx";
import { ButtonTransparent } from "../../../../components/buttons/button-transparent/ButtonTransparent.jsx";
import { ButtonOrange } from "../../../../components/buttons/button-orange/ButtonOrange.jsx";
import { useLanguage } from "../../../../../context/context-language/LanguageContext.js";

export function RegisterForm() {
// translate
const { lang } = useLanguage();
const t = translate[lang];

// errors ,conditions and ApiErrors
const { register, handleSubmit, getValues, setError, formState: { errors } } = useForm();

// redirect configurate
const navigate = useNavigate();

// register logic
const onSubmit = async (formData) => {
    try {
    // retirei o confirm password do objeto pois utilizarei ele somente para validação no front
    const { confirmPassword: _, ...data } = formData;

    await createUser(data);
    // redirect after login
    navigate("/auth/login", { replace: true });
    } catch (error) {
        const serverErrors = error.response?.data?.errors;

        if (serverErrors) {
        Object.keys(serverErrors).forEach((field) => {
            setError(field, { 
                type: "server", 
                message: serverErrors[field] 
                });
            });
        }
    }
};

    return(
        <S.Form onSubmit={handleSubmit(onSubmit)} noValidate>
            <InputForm
                name="nickname"
                $size="big"
                label={t.publicLayout.authLayout.register.label1}
                placeholder={t.publicLayout.authLayout.register.placeHolder1}
                register={register}
                rules={{
                    required: "O apelido é obrigatório",
                }}
            />
            {errors.nickname?.message && <S.Warning>{errors.nickname?.message}</S.Warning>}

            <InputForm
                name="email"
                $size="big"
                label={t.publicLayout.authLayout.register.label2}
                type="text"
                placeholder={t.publicLayout.authLayout.register.placeHolder2}
                register={register}
                rules={{
                    required: "O e-mail é obrigatório",
                    pattern: {
                        value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,5}$/i,
                        message: "Formato de e-mail inválido"
                        }
                }}
            />
            {(errors.email?.message || errors.email?.message) && (
            <S.Warning>{errors.email?.message || errors.email?.message}</S.Warning>
            )}

            <S.ContainerPassword>
                <S.ContainerInput>
                    <InputPassword
                        name="password"
                        label={t.publicLayout.authLayout.register.label3}
                        placeholder={t.publicLayout.authLayout.register.placeHolder3}
                        register={register}
                        rules={{ 
                            required: "A senha é obrigatória",
                            minLength: { value: 8, message: "A senha é muito curta" } 
                        }}
                    />
                    {errors.password?.message && 
                    <S.Warning>{errors.password?.message}</S.Warning>}

                </S.ContainerInput>

                <S.ContainerInput>
                    <InputPassword
                        name="confirmPassword"
                        label={t.publicLayout.authLayout.register.label4}
                        placeholder={t.publicLayout.authLayout.register.placeHolder4}
                        register={register}
                        rules={{
                            required: "A confirmção de senha é obrigatória",
                            validate: (value) => 
                                value === getValues("password") || "As senhas precisam ser iguais"
                        }}
                    />
                    {errors.confirmPassword?.message && 
                    <S.Warning>{errors.confirmPassword?.message}</S.Warning>}

                </S.ContainerInput>
            </S.ContainerPassword>

            <S.ContainerButtons>
                <Link to="/auth/login">
                    <ButtonTransparent type="button" $size="auth">
                    {t.publicLayout.authLayout.register.buttonLogin}
                    </ButtonTransparent>
                </Link>

                <ButtonOrange type="submit">
                    {t.publicLayout.authLayout.register.buttonRegister}
                </ButtonOrange>
            </S.ContainerButtons>
        </S.Form>
    )
}