import ButtonToggleDarkMode from "./ButtonToggleDarkMode";
import SelectLang from "./SelectLang";

function Navbar() {
    return (
    <nav className='navbar flex px-8 py-2 w-full'>
        <ul className='flex justify-end items-center gap-[20px] w-full'>
            <li className="pt-[22px]">
                <ButtonToggleDarkMode />
            </li>
            <li>
                <SelectLang />
            </li>
        </ul>
    </nav>
    )  
  }
  
export default Navbar;

