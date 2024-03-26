import './Header.css';
import { useNavigate } from "react-router-dom";
import logo from "../../Assets/logo.JPG";
import ProfileIcon from "../../Assets/ProfileIcon.JPG";

const NavButton = ({text, path}) =>{
    const navigate = useNavigate()

    return(
    <button className="nav-button" onClick={() => navigate(path)}>
        {text}
    </button>
    )
}
 
const Header = () => {
    return(
        <nav className='navbar'>
            <div className='container'>
                <div className='logo'>
                    <img src={logo} height={80}/>
                </div>
                <ul className='nav'>
                    <li>       
                        <NavButton text="WHAT'S HERE" path="/About us"/>           
                    </li>
                    <li>
                        <NavButton text="OUR HOTEL" path="/HotelBooking"/>                              
                    </li> 
                    <li>
                        <NavButton text="EDUCATIONAL VISITS" path="/EducationalViists"/>                                               
                    </li>
                    <li>
                        <NavButton text="ZOO TICKETS" path="/ZooBooking"/>                                 
                    </li>             
                </ul>
                <div className='login-section'>
                    <div className='profile-icon'>
                        <img src={ProfileIcon} height={40}/>
                    </div>
                    <button className='login-button'>Login</button>
                </div>
         
               
            </div>
        </nav> 
    )
}

export default Header


