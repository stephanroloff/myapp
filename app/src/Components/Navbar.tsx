import { Link } from "react-router-dom";

function Navbar() {
    return (
    <nav className='flex px-8 py-4'>
        <ul className='flex gap-[50px]'>
            <li className="blackWhiteText">
                <Link to="/">Home</Link>
            </li>
            <li className="blackWhiteText">
                <Link to="/about">About</Link>
            </li>
            <li className="blackWhiteText">
                <Link to="/contact">Contact</Link>
            </li>
            <li className="blackWhiteText">
                <a href="/sample-page">Sample</a>
            </li>
        </ul>
    </nav>
    )  
  }
  
export default Navbar;

