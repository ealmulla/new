import { useNavigate } from 'react-router-dom';
import './Footer.css';

const NavButton = ({ text, path }) => {
  const navigate = useNavigate();
  return (
    <button className="footer-nav-button" onClick={() => navigate(path)}>
      {text}
    </button>
  );
};

const Footer = () => {
  return (
    <div className='footer'>
        <div className='site-information'>
            <h2>Site Information</h2>
            <div className='nav-buttons'>
                <NavButton text="webiste accessibility" path="/accessibility" />
                <NavButton text="webiste accessibility" path="/accessibility" />
                <NavButton text="webiste accessibility" path="/accessibility" />
                <NavButton text="webiste accessibility" path="/accessibility" />

            </div>
            <div className='rza'>Rza</div>

        </div>

    </div>



  );
};

export default Footer;