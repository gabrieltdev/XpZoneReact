import * as S from './UserBar';
import { SearchBar } from '../search-bar/SearchBar';
import { Favorites } from '../favorites/Favorites';
import { Notifications } from '../notifications/Notifications';
import { UserAvatar } from '../../../user-avatar/UserAvatar';
import { useUser } from '../../../../../../context/user-context/UserContext';

export function UserBar() {
// user data
const { user } = useUser();
const userNickname = user?.nickname
const userId = user?.id
const userImg = user?.image_url
const path = "/app/profile";

    return(
        <S.UserBarContainer>
            <img src="/logotipo.png" alt="Logo da xpzone" />
            <SearchBar/>
            <S.UserContainer>
                <Favorites/>
                <Notifications/>
                <S.AvatarContainer>
                    <S.Nickname>{user?.nickname}</S.Nickname>
                    <UserAvatar link={path} img={userImg} id={userId || userNickname} userNickname={userNickname}/>
                </S.AvatarContainer>
            </S.UserContainer>
        </S.UserBarContainer>
    )
};