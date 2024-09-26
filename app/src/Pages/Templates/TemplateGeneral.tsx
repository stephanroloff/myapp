import { dataHabitProps } from "@/types/index.types";
import PageTransition  from "../../components/PageTransition";
import { useTranslation } from 'react-i18next';

const TemplateGeneral = ({data}:dataHabitProps) => {
const { t } = useTranslation();    

return (
    <PageTransition>
        <h1>{t(`sidebar.${data.name.toLowerCase()}`)} General</h1>
        <br/>
    </PageTransition>
    );
};

export default TemplateGeneral;
  