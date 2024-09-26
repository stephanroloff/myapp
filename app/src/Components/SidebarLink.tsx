import { IconType } from "react-icons";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Notification  from './Notification';
import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { useState } from "react";

type SidebarLinkProps = {
    route:string;
    name:string;
    icon: IconType;
    notification: number;
    value: string;
    submenus: string[] 
}

const SidebarLink = ({route, name, icon:Icon, notification, value, submenus}:SidebarLinkProps) => {
    const { t } = useTranslation();
    const [linkActive, setlinkActive] = useState<boolean>(false)
    

    return  (
        // <Accordion type="single" collapsible className="w-full">
            <AccordionItem value={value}>
            <li className="blackToWhiteText w-full text-customGray dark:text-white softTrans">
                <NavLink 
                to={route} 
                // className={({ isActive }) =>
                //     isActive 
                //     ? "text-themeColor dark:text-themeColorSoft softTrans flex justify-between items-center border-l-2 border-themeColor dark:border-themeColorSoft bg-themeColorLightSoft dark:bg-themeColorObscure rounded-br-lg py-2"
                //     : "w-full text-customGray dark:text-white softTrans flex justify-between items-center border-l-2 border-customGraySoft dark:border-customGray"
                // }
                className={({ isActive }) =>
                    isActive? (setlinkActive(true)):(setlinkActive(false))
                }
                >
                    <div
                    className={linkActive?
                        'text-themeColor dark:text-themeColorSoft softTrans flex justify-between items-center border-l-2 border-themeColor dark:border-themeColorSoft bg-themeColorLightSoft dark:bg-themeColorObscure rounded-br-lg py-2'
                        :
                        'w-full text-customGray dark:text-white softTrans flex justify-between items-center border-l-2 border-customGraySoft dark:border-customGray'}
                    >
                    <AccordionTrigger>
                            <div className={linkActive? "text-themeColor dark:text-themeColorSoft softTrans icon-text-container flex items-center":"text-customGray dark:text-white softTrans icon-text-container flex items-center"}>
                                <div className="children-icon mx-4">
                                    <Icon className="w-7 h-7"/>
                                </div>
                                {t(`sidebar.${name.toLowerCase()}`)}
                                {notification>0?(
                                <Notification />
                            ):''}
                            </div>
                    </AccordionTrigger>
                    </div>

                </NavLink>

                {/* Submenus */}
                <AccordionContent className="py-2 pl-3">
                    {!submenus ? '' : (
                        submenus.map((submenu, index) => (
                            <NavLink key={index} to={`${route}/${submenu}`}>
                            <p className="w-full rounded-md pl-4 py-1 hover:cursor-pointer hover:bg-themeColorLightSoft dark:hover:bg-themeColorObscure">
                                {t(`sidebar.${submenu.toLowerCase()}`)}
                            </p>
                            </NavLink>
                        ))
                    )}
                </AccordionContent>
            </li>
            </AccordionItem>
        // </Accordion>
    );
};
  
export default SidebarLink;