import { dataHabitProps } from "@/types/index.types";
import PageTransition  from "../../components/PageTransition";
import BreadcrumbComponent from "../../components/Breadcrum";
import { useTranslation } from 'react-i18next';
import { useLocation } from "react-router-dom";

const TemplateGeneral = ({data}:dataHabitProps) => {
const { t } = useTranslation();    
const location = useLocation(); 
const parts = location.pathname.slice(1).split("/");  

return (
    <PageTransition>
        <BreadcrumbComponent parts={parts}/>
        <h1>{t(`sidebar.${data.name.toLowerCase()}`)} General</h1>
        <br/>
    </PageTransition>
    );
};

export default TemplateGeneral;
  