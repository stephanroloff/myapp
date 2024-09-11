// import Logo from '../assets/img/plant.png'
import Logo from '../assets/img/mind.png'    
import SidebarLink from "./SidebarLink";
import { IoHome } from "react-icons/io5";
import { FaPersonRunning } from "react-icons/fa6";
import { GiRead } from "react-icons/gi";


function Sidebar() {
    return (
        <aside className="sidebar">
            <nav className="h-full p-4 min-w-[300px] border-r-2 dark:border-r border-customGraySoft dark:border-customGray softTrans">
                <div className="logo mb-4">
                    <img src={Logo} alt="" className="inline mr-2"/>
                    <p className="inline blackToWhiteText font-fontSecondary">HabitMind</p>
                </div>
                <ul className='flex flex-col'>
                    <SidebarLink route={'/'} name={'Home'} icon={IoHome} notification={0}/>
                    <SidebarLink route={'/about'} name={'Running'} icon={FaPersonRunning} notification={0}/>
                    <SidebarLink route={'/contact'} name={'Read'} icon={GiRead} notification={0}/>
                </ul>
            </nav>
        </aside>
    )  
  }
  
export default Sidebar;

