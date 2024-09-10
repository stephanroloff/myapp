import ButtonToggleDarkMode from "./ButtonToggleDarkMode";
import SelectToggleLang from "./SelectToggleLang";

function Navbar() {
    return (
    <nav className='navbar flex px-8 py-3 w-full'>
        <ul className='flex justify-end gap-[20px] w-full'>
            <li className="pt-[2px]">
                <ButtonToggleDarkMode />
            </li>
            <li>
                <SelectToggleLang />
            </li>
        </ul>
    </nav>
    )  
  }
  
export default Navbar;

