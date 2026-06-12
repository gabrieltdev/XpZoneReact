import * as S from './CategoryBarStyled'
import translate from "../../../../../../locales/translate.json";
import { useLanguage } from "../../../../../../context/context-language/LanguageContext";
import { useRef, useState } from 'react';

export function CategoryBar() {
// translate
const { lang } = useLanguage();
const t = translate[lang];

// list of categories
const categories = t.appLayout.home.categories

// filter of categories
const [activeCategory, setActiveCategory] = useState("");

const handleCategoryClick = (categoryName) => {
    setActiveCategory(categoryName);
    // chamar sua função de busca no backend depois!
    console.log("Filtrar backend por:", categoryName);
};

// scrolling through the list of categories
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

    return(
        <S.CategoryBarContainer >
            <S.Container
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}>

                {categories.map(( item ) => (
                        <S.CategoryButton 
                            $isActive={activeCategory === item.categorie}
                            onClick={() => handleCategoryClick(item.categorie)}
                            >{item.categorie}
                        </S.CategoryButton>
                ))}

            </S.Container>
        </S.CategoryBarContainer>
    )
};