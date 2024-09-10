import { IconType } from "react-icons";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

type SidebarLinkProps = {
    route:string;
    name:string;
    icon: IconType;
    notification: number;
}

const SidebarLink = ({route, name, icon:Icon, notification}:SidebarLinkProps) => {
    const { t } = useTranslation();


    return  (
        <li className="blackToWhiteText">
            <NavLink 
            to={route} 
            className={({ isActive }) =>
                isActive 
                ? " text-themeColor dark:text-themeColorSoft softTrans flex justify-between items-center border-l-2 border-themeColor dark:border-themeColorSoft bg-[#f0f8f4] dark:bg-themeColorObscure rounded-r-md py-2"
                : " text-customGray dark:text-white softTrans flex justify-between items-center border-l-2 border-customGraySoft dark:border-customGray py-1"
            }
            >
                <div className="icon-text-container flex items-center">
                    <div className="children-icon mx-2 mt-[4px]">
                        <Icon className="w-4 h-4"/>
                    </div>
                    {t(`sidebar.${name.toLowerCase()}`)}
                </div>

                {notification>0?(
                    <span className="relative top-0 right-0 flex h-2 w-2 mr-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>
                ):''}
            </NavLink>
        </li>
    );
};
  
export default SidebarLink;