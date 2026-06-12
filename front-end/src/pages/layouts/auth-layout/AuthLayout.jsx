import { Outlet } from "react-router-dom"
import * as S from "./StyleLayout"
import { BackButton } from "../../components/buttons/back-button/BackButton"

export function AuthLayout() {

    return (
        <S.StyledMain>
            <header>
                <S.ContainerBackButton>
                    <BackButton />
                </S.ContainerBackButton>
            </header>
            <S.Container>
                <Outlet/>
            </S.Container>
        </S.StyledMain>
    )
}