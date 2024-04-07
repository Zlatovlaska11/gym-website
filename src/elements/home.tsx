import axios from 'axios';
import Nabvar from './navbar';
import ModelBench from './3d-model';
import React, { useState, useEffect } from "react";





function Home() {
  const [props, setProps] = useState("");

  console.log(localStorage.getItem('userData'))

  const MakeRequest: any = async () => {
    axios.post("http://127.0.0.1:8080/dsc", {
      "url": "1",
      "username": localStorage.getItem('uname'),
      "password": localStorage.getItem('pass'),
    })
      .then((resp) => setProps(resp.data.desc))
      .catch((error) => (console.log(error)));
  }

  MakeRequest();

  //console.log("props", props);

  return (
    <>
      <Nabvar />
      <div className='flex w-full h-fl justify-center self-center flex-row'>
        <div className='mx-auto w-5/12 h-fl justify-center self-center mt-20 rounded-xl'>
          <ModelBench id={0}>
          </ModelBench>
        </div>
        <div className='mx-auto bg-primary w-4/12 h-fl justify-center self-center mt-20 rounded-xl'>
          <h1 className='flex justify-center mt-10 text-yellow-400'>
            {"ZLATOVLAS GYM"}
          </h1>
          <p className='text-3xl ml-10 mr-10 mt-20'>
            {props}
          </p>
        </div>
      </div>
    </>
  )
}

export default Home;
