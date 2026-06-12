import * as S from './/ColumnStyle.js';
import * as T from '../../TypographyStyle.js';

export function NavColumns({ title, links }) {
    return (
        <S.NavContainer>
            <T.NavTitle>{title}</T.NavTitle>
            <S.ListContainer>
                {links.map(( item, index ) => (
                    <S.ListContent key={index}>
                        {item.image && <img src={item.image}/>}
                        <T.NavText href={item.path}>
                            {item.label}
                        </T.NavText>
                    </S.ListContent>
                ))}
            </S.ListContainer>
        </S.NavContainer>
    )
}