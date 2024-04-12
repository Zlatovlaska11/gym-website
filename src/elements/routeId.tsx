import axios from "axios";
import { useNavigate } from "react-router-dom";

export module id_router {

  export async function getIdToRoute() {

    const navigate = useNavigate();
    let id: number = -1;
    const getUserId = async () => {
      const resp = await axios.post("http://localhost:8080/getId", {
        "token": localStorage.getItem('xsesion'),
      });

      if (resp.status == 200) {
        console.log(resp.data);
        id = resp.data;
        console.log(resp.data)
        navigate(`/user/${id}`);
      }
    }

    getIdToRoute()
    

  }
}

export default id_router
