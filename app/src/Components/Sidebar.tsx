import SidebarLink from "./SidebarLink";
import { IoHome } from "react-icons/io5";
import { FaPersonRunning } from "react-icons/fa6";
import { GiRead } from "react-icons/gi";
import { SlNotebook } from "react-icons/sl";
import SidebarLogo from "./SidebarLogo";
import {Accordion} from "@/components/ui/accordion"

function Sidebar() {
    return (
        <aside className="sidebar">
            <nav className="h-full p-4 w-[350px] border-r-2 dark:border-r border-customGraySoft dark:border-customGray softTrans">
                <SidebarLogo/>
                <ul className='flex flex-col'>
                    <Accordion type="single" collapsible className="w-full">
                        <SidebarLink route={'/'} name={'Home'} icon={IoHome} notification={0} value={"item-1"}/>
                        <SidebarLink route={'/running'} name={'Running'} icon={FaPersonRunning} notification={0} value={"item-2"}/>
                        <SidebarLink route={'/contact'} name={'Read'} icon={GiRead} notification={0} value={"item-3"}/>
                        <SidebarLink route={'/elements'} name={'Elements'} icon={SlNotebook} notification={0} value={"item-4"}/>
                    </Accordion>
                </ul>
            </nav>
        </aside>
    )  
  }
  
export default Sidebar;

