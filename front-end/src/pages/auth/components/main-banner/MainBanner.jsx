import * as S from "./MainBannerStyled";
import { useRef, useState } from "react";
import { SeeMoreButton } from "../button/see-more-button/SeeMoreButton";
import { MiniBanner } from "../mini-banner/MiniBanner";
import { useFilterInfo } from "../../../../utils/useFilterInfo";
import { GamesConsoles } from "../../../../services/game";
import { GamesCategorieCount } from "../../../../services/game"
import { useInfoById } from "../../../../utils/useInfoById"

const CONSOLE_IMAGES = {
  1: "/MiniBannerEsporte.jpg",
  2: "/haloBanner.png",
  3: "/codBanner.png",
  4: "/minecraftBanner.png",
  5: "/gtaSaBanner.png",
  6: "/MarioBanner.png",
};

export function MainBanner() {
const bannerUrl = "/banner.png";
const { info: games, loading:loadingCards } = useFilterInfo(GamesConsoles);
const { info: count, loading:loading } = useInfoById(GamesCategorieCount,1)

const scrollRef = useRef(null);
const [isDragging, setIsDragging] = useState(false);
const [startX, setStartX] = useState(0);
const [scrollLeft, setScrollLeft] = useState(0);

const handleMouseDown = (e) => {
  setIsDragging(true);
  setStartX(e.pageX - scrollRef.current.offsetLeft);
  setScrollLeft(scrollRef.current.scrollLeft);
};

const handleMouseLeave = () => setIsDragging(false);
const handleMouseUp = () => setIsDragging(false);

const handleMouseMove = (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - scrollRef.current.offsetLeft;
  const walk = (x - startX) * 1;
  scrollRef.current.scrollLeft = scrollLeft - walk;
};

  return (
    <S.MainStyled>
      <S.MainContainer>
        <S.BannerContainer style={{ backgroundImage: `url(${bannerUrl})` }}>
          <S.TitleBanner>Jogue hoje mesmo</S.TitleBanner>
          <S.NameGame>Categoria aventura</S.NameGame>
            {loading ? (
            <S.LoadingDots>
                <span />
                <span />
                <span />
            </S.LoadingDots>
                ) : (
                    <S.TextCountGames>
                        {count?.total} jogos disponíveis na sua cidade
                    </S.TextCountGames>
                )}
          <S.SeeMore>Ver mais</S.SeeMore>
        </S.BannerContainer>

        {loadingCards ? (
            <S.LoadingDots>
                <span />
                <span />
                <span />
            </S.LoadingDots>
                ) : (
                <S.MiniBannerContainer
                ref={scrollRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                >
                {games.map((item) => (
                    <MiniBanner
                    miniBannerUrl={CONSOLE_IMAGES[item.console_id]}
                    count={item.totalGames}
                    title={item.console.name_console}
                    />
                ))}
                </S.MiniBannerContainer>
        )}
      </S.MainContainer>
    </S.MainStyled>
  );
}
