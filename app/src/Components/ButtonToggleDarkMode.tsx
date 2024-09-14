import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { useState, useEffect } from 'react';

type ButtonToggleDarkModeProps = React.ComponentProps<'button'>

const ButtonToggleDarkMode = ({children='', ...rest}: ButtonToggleDarkModeProps) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
      setIsDarkMode(document.body.classList.contains('dark'));
    }, []);

    const toggleDarkMode = () => {
      document.body.classList.toggle('dark');
      setIsDarkMode(!isDarkMode);
    };

    return  (
        <button {...rest} 
        onClick={toggleDarkMode}
        className="flex justify-center items-center min-w-10 w-auto h-10 text-xl mb-5 rounded-full blackToWhiteBg whiteToBlackText"
        >
          {isDarkMode ? (<><IoSunnyOutline />{children}</>) : (<><IoMoonOutline />{children}</>)}
        </button>
    );
};
  
export default ButtonToggleDarkMode;