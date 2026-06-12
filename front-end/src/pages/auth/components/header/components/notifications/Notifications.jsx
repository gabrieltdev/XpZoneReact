import * as S from './NotificationsStyle'
import { Bell } from 'lucide-react'

export function Notifications() {
    return(
        <S.NotificationContainer>
            <S.NotificationButton><Bell fill="var(--icons)"/></S.NotificationButton>
        </S.NotificationContainer>
    )
}