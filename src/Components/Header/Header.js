import './Header.css'
import logo from "../../Assets/logo.JPG"

const navButton = ({text, path}) => {
    // Import the useNavigate hook from react-router-dom
    const navigate = useNavigate()
    return(
        // When the button is clicked, call the navigate function with the provided path
        <button className='Nav-Button' onClick={ () => navigate(path)}>
            {text}
        </button>
    )
}

const Header = () => {
    return(
        <nav className='navbar'>
            <div className='container'>
                <div className='logo'><img src={logo} height={80}/></div>
                <ul className='nav'>
                    <li>
                        <navButton text="Home" path="/home"/>
                    </li>
                    <li>
                        <navButton text= "About us" path="/AboutUs"/>
                    </li>
                    <li>
                        <navButton/>
                    </li>
                    <li>
                        <navButton/>
                    </li>
                    <li>
                        <navButton/>
                    </li>
                    <li>
                        <navButton/>
                    </li>
                    
                </ul>
    
            </div>
        </nav>
    )
}

export default Header