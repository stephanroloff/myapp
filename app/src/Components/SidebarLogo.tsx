// import Logo from '../assets/img/plant.png'
import { Link } from 'react-router-dom';
import Logo from '../assets/img/mind.png'   

const SidebarLogo = () => {

    return  (
            <Link to={'/'}>
              <div className="logo mb-8 mt-2 ml-2 flex items-center">
                  <img src={Logo} alt="" className="inline mr-2"/>
                  <p className="inline blackToWhiteText font-fontSecondary text-3xl">HabitMind</p>
              </div>
            </Link>
    );
};
  
export default SidebarLogo;