import * as S from "./InputStyle";

export function InputForm ({register, name, rules, id, label, type, placeholder, value, onChange, ...props }) {
    return (
        <S.StyledContainer>
            {label && <S.StyledLabel htmlFor={id}>{label}</S.StyledLabel>}

            <S.StyledInput
                id={id}
                {...props}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="input"
                {...(register ? register(name, rules) : {})}
            />
        </S.StyledContainer>
    );
}