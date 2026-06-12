import * as S from './FavoritesStyle';
import { Heart } from 'lucide-react';

export function Favorites() {
    return(
        <S.FavoriteContainer>
            <S.FavoriteButton><Heart fill="var(--icons)"/></S.FavoriteButton>
        </S.FavoriteContainer>
    )
}