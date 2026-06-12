import { ContentContainer } from "./ContentStyle";
import { NavColumns } from "../components/nav-columns/NavColumns";
import { PrimaryColumn } from "../components/primary-column/PrimaryColumn";

export function Content({ text }) {
    return (
        <ContentContainer>
            <PrimaryColumn text={text}/>
            <NavColumns
                title={text.subTitle1}
                links={text.linksEnterprise}
            />
            <NavColumns
                title={text.subTitle2}
                links={text.linksResources}
            />
            <NavColumns
                title={text.subTitle3}
                links={text.linksPolicy}
            />
            <NavColumns
                title={text.subTitle4}
                links={text.linksApplication}
            />
        </ContentContainer>
    )
}