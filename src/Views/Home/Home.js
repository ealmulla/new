import Header from '../../Components/Header/Header'
import { useNavigate } from "react-router-dom";

const NavButton = ({ text, path }) => {
    const navigate = useNavigate();
  
    return (
      <button className="nav-button" onClick={() => navigate(path)}>
        {text}
      </button>
    );
  };
const Home = () =>{
    return(
        <div>
            <Header/>

        </div>
    )
}


export default Home
