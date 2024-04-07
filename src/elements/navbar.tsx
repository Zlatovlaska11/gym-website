import './navbar.css';
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import * as jose from 'jose'
import * as dotenv from 'dotenv'



function Navbar() {



  const storedUserData = localStorage.getItem('userData');
  let username = "Login";

  let route = "/login"

  if (storedUserData !== null) {
    const userData = JSON.parse(storedUserData);
    username = userData.username;
    if (username != "Login") {

      route = "/user"

    }

  }

  const navigate = useNavigate();




  return (
    <div className="navbar">

      <div className="buttons">
        <button
          onClick={() => navigate("/")}>
          {"Home"}
        </button>
        <button
          onClick={() => navigate("/about")}>
          {"About"}
        </button>
        <button
          onClick={() => navigate("/contact")}>
          {"Contact"}
        </button>
      </div>


      <div className="user">
        <button
          className='username'
          onClick={() => navigate(route)}>
          {username}
        </button>
      </div>

    </div>

  );
}

export default Navbar;
