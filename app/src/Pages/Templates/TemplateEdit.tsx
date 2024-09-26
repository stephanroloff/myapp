import { dataHabitProps } from "@/types/index.types";
import PageTransition  from "../../components/PageTransition";
import { useTranslation } from 'react-i18next';

const TemplateEdit = ({data}:dataHabitProps) => {
const { t } = useTranslation();

return (
    <PageTransition>
        <h1>{t(`sidebar.${data.name.toLowerCase()}`)} {t(`sidebar.edit`)}</h1>
        <br/>
        <p>{data.name}</p> 
        <p>This is a Edit Page</p>
        <p>{data.url}</p>
    </PageTransition>
    );
};

export default TemplateEdit;
  