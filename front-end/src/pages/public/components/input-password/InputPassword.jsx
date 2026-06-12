import React, { useState } from 'react';
import * as S from './InputStyle.js';
import { Eye, EyeOff } from 'lucide-react';

export const InputPassword = ({register, name, rules, label, id, placeholder, ...props}) => {

//logic the button show password
const [showPassword, setShowPassword] = useState(false);
const togglePassword = () => setShowPassword(!showPassword);

  return (
    <S.PasswordContainer>
        {label && <S.StyledLabel htmlFor={id}>{label}</S.StyledLabel>}
        
        <S.StyledContainer>
            <S.StyledInput
            id={id}
            type={showPassword ? "text" : "password"}
            placeholder={placeholder}
            {...props}
            {...(register ? register(name, rules) : {})}
            />

            <S.ShowPassword type="button" onClick={togglePassword} tabIndex="-1">
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </S.ShowPassword>
        </S.StyledContainer>
    </S.PasswordContainer>
  );
};