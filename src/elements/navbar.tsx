import './navbar.css';
import { useNavigate } from "react-router-dom";
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import id_router from './routeId';


interface payload {
  id: number,
  username: String,
  password: String,
  email: String,
}

function Navbar() {



  const storedUserData = localStorage.getItem('xsesion');
  let username: String = "Login";

  let route = "/login"

  if (storedUserData !== null) {

    if (localStorage.getItem('xsesion') !== null) {
      const token = localStorage.getItem('xsesion')
      if (token != null) {
        const jwtDec = jwtDecode<payload>(token);
        username = jwtDec.username;

      }
    }

    if (username != "Login") {

      route = "/user"

    }

  }



  var id: number = -1;
  const getUserId = async () => {

    if (localStorage.getItem('xsesion') == null) {
      navigate("/login")
    }
    const resp = await axios.post("http://localhost:8080/getId", {
      "token": localStorage.getItem('xsesion'),
    });

    if (resp.status == 200) {
      id = resp.data;
      navigate(`/user/${id}`);
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
          onClick={() => getUserId()}>
          {username}
        </button>
      </div>

    </div>

  );
}

export default Navbar;
