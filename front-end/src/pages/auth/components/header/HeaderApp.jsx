import { MainStyled } from '../../home/HomeStyled.js';
import { CategoryBar } from './components/category-bar/CategoryBar.jsx';
import { UserBar } from './components/user-bar/UserBar.jsx';
import * as S from './HeaderStyle.js';

export function HeaderApp() {
    return (
        <S.Header>
            <S.MainStyled>
                <UserBar/>
                <CategoryBar/>
            </S.MainStyled>
        </S.Header>
    )
}