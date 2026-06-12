import * as S from './HomeStyled'
import { Footer } from '../../components/footer/Footer';
import { Outlet } from 'react-router-dom';
import { HeaderApp } from '../components/header/HeaderApp';
import { CountGamesByConsole } from './components/count-games-consoles/CountGamesConsole';
import { GamesBar } from '../components/games-bar/GamesBar';
import { GamesNearby } from '../../../services/game';
import { GamesByConsole } from '../../../services/game';
import { useInfoById } from '../../../utils/useInfoById';
import { useFilterInfo } from '../../../utils/useFilterInfo';

export function Home() {
const { info: infoPs5, loading:loadingPs5 } = useInfoById(GamesByConsole, 1);
const { info: gamesNear, loading:loadingNear } = useFilterInfo(GamesNearby);

const ps5Games = infoPs5?.games || [];
const ps5Title = infoPs5?.console || "";

    return (
        <S.Background>
            <S.MainStyled>
                <HeaderApp/>
                <Outlet/>
                <CountGamesByConsole/>
                <GamesBar gameList={ps5Games} loading={loadingPs5} title={`Jogos em destaque ${ps5Title}`}/>
                <GamesBar gameList={gamesNear} loading={loadingNear} title="Super novos próximos a você"/>
                <Footer link="/app/product-profile" />
            </S.MainStyled>
        </S.Background>
    )
}