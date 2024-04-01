import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";

interface creds {
  uname: String;
  pass: String;
  mail: String;
  reg: boolean;
}


function cacheUserData(data: creds) {

  let send_data = {

    "username": data.uname,
    "password": data.pass,

  }

  localStorage.setItem('userData', JSON.stringify(send_data));
}

function Login() {


  const [formData, setFormData] = useState<creds>({

    uname: "",
    pass: "",
    mail: "",
    reg: false,

  });



  const [formDataReg, setFormDataReg] = useState<creds>({

    uname: "",
    pass: "",
    mail: "",
    reg: true,

  });


  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }))

  }


  const handleChangeReg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormDataReg(prevData => ({ ...prevData, [name]: value }))

  }



  const handleLoginSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      //console.log(formData);
      const response = await axios.post('http://localhost:8080/login', {
        reg: false,
        uname: formData.uname,
        pass: formData.pass,
      });

      if (response.status == 200) {
        cacheUserData(formData);
        navigate('/user');

      }
    } catch (error) {
      // handle error or unauthorized
    }
  }



  const handleRegSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log(formDataReg);
      const response = await axios.post('http://localhost:8080/login', {
        reg: true,
        uname: formDataReg.uname,
        pass: formDataReg.pass,
        mail: formDataReg.mail,
      });
      //console.log(response);

      if (response.status == 200) {
        localStorage.setItem('isLoggedIn', 'true');
        cacheUserData(formDataReg);
        navigate('/user');
        console.log("Successfully registered");

      }
    } catch (error) {
      console.log("not registered");
    }
  }



  return (
    <>
      <Navbar />
      <div className="loginOrregister">
        <div className="login">
          <form className="lgform" onSubmit={handleLoginSubmit}>
              <h1>Login</h1>
            <div className="lg">
              <input type="text" placeholder="Username" name="uname" onChange={handleChange} />
              <input type="password" placeholder="Password" name="pass" onChange={handleChange} />
            </div>
            <button type="submit" className="subtn">Login</button>
          </form>
        </div>
        <div className="register">
          <form className="rgform" onSubmit={handleRegSubmit}>
            <h1>Register</h1>
            <div className="rg">
              <input type="text" placeholder="Username" name="uname" onChange={handleChangeReg} />
              <input type="email" placeholder="Email" name="mail" onChange={handleChangeReg} />
              <input type="password" placeholder="Password" name="pass" onChange={handleChangeReg} />
            </div>
            <button type="submit" className="subtn">Register</button>
          </form>
        </div>
      </div>
    </>

  );


}

export default Login;
