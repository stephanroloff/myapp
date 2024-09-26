import { dataHabitProps } from "@/types/index.types";
import PageTransition  from "../../components/PageTransition";
import { useTranslation } from 'react-i18next';

const TemplateStatistics = ({data}:dataHabitProps) => {
const { t } = useTranslation();

return (
    <PageTransition>
        <h1>{t(`sidebar.${data.name.toLowerCase()}`)} {t(`sidebar.statistics`)}</h1>
        <br/>
        <p>{data.name}</p>
    </PageTransition>
    );
};

export default TemplateStatistics;
  