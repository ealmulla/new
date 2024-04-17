import './Home.css'
import Header from '../../Components/Header/Header'
import { useNavigate } from "react-router-dom";
import Footer from '../../Components/Footer/Footer';
import heroImage from '../../Assets/heroimage.JPG'

const NavButton = ({ text, path }) => {
    const navigate = useNavigate();
  
    return (
      <button className="nav-button" onClick={() => navigate(path)}>
        {text}
      </button>
    );
  };

const HeroSection = () => {
  return (
    <div className='hero-section'>
      <div className='hero-text'>
        <h1>Enjoy</h1>
        <p>CLASSIC</p>
        <div className='hero-buttons'>
          <button>yay</button>
          <button>ok</button>
        </div>
      </div>
      <img src={heroImage} alt="Hero" className="hero-image" />
    </div>
  );
}

const Home = () =>{
    return(
        <div>
            <Header/>
            <HeroSection/>
            <Footer/>
            
        </div>

    )
}


export default Home
