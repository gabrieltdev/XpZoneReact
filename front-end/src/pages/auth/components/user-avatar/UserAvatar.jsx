import * as S from './UserAvatarStyle';

import { Link } from "react-router-dom";

export function UserAvatar({ img, size, link, id, userNickname }) {    
const imageSource = img || "/defaultUser.jpg";
    
    return (
        <S.ImageContainer
            $size={size}
        >
            <Link to={link}>
                <S.ButtonProfile>
                    <S.ProfileImage
                        src={`${imageSource}?seed=${id}`}
                        alt={userNickname || "Avatar"}
                        onError={(e) => { 
                            e.target.onerror = null;
                            e.target.src = "/defaultUser.jpg"; 
                        }}
                    />
                </S.ButtonProfile>
            </Link>
        </S.ImageContainer>
    )
}