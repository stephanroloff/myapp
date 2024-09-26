//Icons
import { IoHome } from "react-icons/io5";
import { FaPersonRunning } from "react-icons/fa6";
import { GiRead } from "react-icons/gi";
import { SlNotebook } from "react-icons/sl";
import { IconType } from "react-icons";

import SidebarLink from "./SidebarLink";
import SidebarLogo from "./SidebarLogo";
import { Accordion } from "@/components/ui/accordion";
import dataPerson from "../fetch/habits.json";
import { DataPerson } from '../types/index.types';

// Define un tipo para iconMap que permita el acceso con string
interface IconMap {
    [key: string]: IconType;
}

//Mapeo
const iconMap: IconMap = {
    IoHome: IoHome,
    FaPersonRunning: FaPersonRunning,
    GiRead: GiRead,
    SlNotebook: SlNotebook,
};

const allMyHabbits: DataPerson = dataPerson.myHabbits;

function Sidebar() {
    return (
        <aside className="sidebar">
            <nav className="h-full p-4 w-[350px] border-r-2 dark:border-r border-customGraySoft dark:border-customGray softTrans">
                <SidebarLogo />
                <ul className='flex flex-col'>
                    <Accordion type="single" collapsible className="w-full">
                        <SidebarLink 
                            route={'/home'} 
                            name={'Home'} 
                            icon={IoHome} 
                            notification={0} 
                            value={"item-1"}
                            submenus={["statistics", "trackingquestions"]} 
                        />

                        {allMyHabbits.map((data, index) => {
                            const IconComponent:IconType = iconMap[data.icon];
                            
                            return (
                                <SidebarLink 
                                    route={`/${data.url}`} 
                                    name={data.name} 
                                    icon={IconComponent} 
                                    notification={data.notification} 
                                    value={`item-${index + 2}`}
                                    submenus={data.submenus}  
                                    key={index} 
                                />
                            );
                        })}

                        <SidebarLink 
                            route={'/elements'} 
                            name={'Elements'} 
                            icon={SlNotebook} 
                            notification={0} 
                            value={"item-4000"} 
                            submenus={[]} 
                        />
                    </Accordion>
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;