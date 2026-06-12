import * as S from './HighlightStyled';
import { GamesBar } from "../components/games-bar/GamesBar";
import { GamesByConsole } from '../../../services/game';
import { ProfileBar } from '../components/profile-bar/ProfileBar';
import { useFilterInfo } from '../../../utils/useFilterInfo';
import { useInfoById } from '../../../utils/useInfoById';
import { SearchUsersNearby } from '../../../services/user';
import { MainBanner } from '../components/main-banner/MainBanner';

export function Highlights() {
const { info: infoPs4, loading:loadingPs4 } = useInfoById(GamesByConsole, 2);
const { info: infoXbox, loading:loadingXbox } = useInfoById(GamesByConsole, 4);
const { info: users, loading:loadingUsers } = useFilterInfo(SearchUsersNearby);

const gamesPs4 = infoPs4?.games || [];
const consolePs4 = infoPs4?.console || "";

const gamesXbox = infoXbox?.games || [];
const consoleXbox = infoXbox?.console || "";

    return (
        <S.MainStyled>
            <MainBanner/>
            <ProfileBar usersList={users} loading={loadingUsers} title="Estantes próximas a você"/>
            <GamesBar gameList={gamesXbox} loading={loadingXbox} title={`Para ${consoleXbox}`}/>
            <GamesBar gameList={gamesPs4} loading={loadingPs4} title={`Para ${consolePs4}`}/>
        </S.MainStyled>
    )
}