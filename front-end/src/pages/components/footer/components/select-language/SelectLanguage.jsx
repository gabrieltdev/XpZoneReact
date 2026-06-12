import * as S from "./LanguageStyle"
import language from "./languages.json"

export function SelectLanguage({ setLang, lang }) {

    const langObject = language.language;
    const currentLanguage = langObject[lang];

    const changeFlag = (event) => {
        const selectedCode = event.target.value;
        setLang(selectedCode);
    }

    return (
        <S.Container>
            <S.Image src={currentLanguage.flag_path} alt={currentLanguage.name} />
            <S.LanguageContainer onChange={changeFlag} value={lang}>
                {Object.values(language.language).map(( item ) => (
                    <S.Language key={item.id} value={item.code}>
                        {item.name}
                    </S.Language>
                ))}
            </S.LanguageContainer>
        </S.Container>
    )
}