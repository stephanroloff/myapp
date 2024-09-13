import { IconType } from "react-icons";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Notification  from './Notification';
import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

type SidebarLinkProps = {
    route:string;
    name:string;
    icon: IconType;
    notification: number;
    value: string;
}

const SidebarLink = ({route, name, icon:Icon, notification, value}:SidebarLinkProps) => {
    const { t } = useTranslation();

    return  (
        // <Accordion type="single" collapsible className="w-full">
            <AccordionItem value={value}>
            <li className="blackToWhiteText w-full">
                <NavLink 
                to={route} 
                className={({ isActive }) =>
                    isActive 
                    ? " text-themeColor dark:text-themeColorSoft softTrans flex justify-between items-center border-l-2 border-themeColor dark:border-themeColorSoft bg-themeColorLightSoft dark:bg-themeColorObscure rounded-br-lg py-2"
                    : "w-full text-customGray dark:text-white softTrans flex justify-between items-center border-l-2 border-customGraySoft dark:border-customGray py-1"
                }
                >
                    <AccordionTrigger>
                            <div className="icon-text-container flex items-center">
                                <div className="children-icon mx-2 mt-[4px]">
                                    <Icon className="w-4 h-4"/>
                                </div>
                                {t(`sidebar.${name.toLowerCase()}`)}
                            </div>

                            {notification>0?(
                                <Notification />
                            ):''}
                    </AccordionTrigger>
                </NavLink>
                <AccordionContent>
                    <p className="pl-4">Option 1</p>
                    <p className="pl-4">Option 2</p>
                </AccordionContent>
            </li>
            </AccordionItem>
        // </Accordion>
    );
};
  
export default SidebarLink;