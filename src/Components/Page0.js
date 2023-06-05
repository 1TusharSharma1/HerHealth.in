import '../Components/Page0.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from '../Assets/img1.png';
import { Link } from "react-router-dom";

const Page1 = () => {
  return (
    <>
      <div className="container">
        <div className="main">
          <h1 className='heading'>Empowered<br/> <span style={{color: "#f1ba04"}}>Women</span> Uplift <br/>The Society</h1>
          <img src={Image} alt="" style={{ marginRight: '-60px' }}></img>
        </div>
        <Link to="/dashboard">
          <button>Personalized Dashboard ➡️ <span><FontAwesomeIcon icon="fa-solid fa-arrow-right" /></span></button>
        </Link>
      </div>
    </>
  );
};

export default Page1;
