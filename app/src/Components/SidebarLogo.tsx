// import Logo from '../assets/img/plant.png'
import { Link } from 'react-router-dom';
import Logo from '../assets/img/mind.png'   

const SidebarLogo = () => {

    return  (
            <Link to={'/'}>
              <div className="logo mb-4">
                  <img src={Logo} alt="" className="inline mr-2"/>
                  <p className="inline blackToWhiteText font-fontSecondary">HabitMind</p>
              </div>
            </Link>
    );
};
  
export default SidebarLogo;