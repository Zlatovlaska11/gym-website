import Navbar from './navbar';
import Model from './3d-model';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { userData } from 'three/examples/jsm/nodes/Nodes.js';

interface ExcerciseProps {
  id: number;
  setId: (id: number) => void;

}

function Dashboard() {

  const [props, setProps] = useState("");

  let makeReq = async () => {

    const storedUserData = localStorage.getItem('userData');

    if (storedUserData !== null) {
      const userData = JSON.parse(storedUserData);

      const req = await axios.post('http://localhost:8080/chck', {
        "username": userData.username,
        "password": userData.password,
        "url": 1,

      });

      if (req.status == 200) {
        console.log("finally");
      }

    }
    else {
      console.log("err");
    }

  }

  makeReq();


  const navigate = useNavigate();

  const [id, setId] = useState<number>(0);

  let exporps: ExcerciseProps = {
    id,
    setId
  };

  let onclick = () => {
    localStorage.clear();
    navigate('/');
  }

  return (
    <>
      <Navbar />
      <div className='flex flex-row'>
        <div className="flex h-fl w-1/3 bg-primary flex-col rounded-3xl mx-5 mt-10">
          <h1 className='flex mx-auto text-secondary mt-20  text-center'>Account Info</h1>

          <div className="flex h-fl w-full flex-col mb-20 mt-20 rounded-3xl mx-5  ">
            <UserInfo title="Name: John Doe" />
            <UserInfo title="Permit exp: 23 days" />
            <UserInfo title="Weight: 180 lbs" />
            <UserInfo title="Height: 6'2" />
            <UserInfo title="BMI: 25" />
            <button className='flex bg-gray-700 text-center items-center justify-center  w-8/12 h-20 rounded-xl mx-auto mt-14 motion-safe:hover:scale-110' onClick={onclick}>{"Logout"}</button>

          </div>
        </div>

        <div className="flex h-fl w-2/3 bg-primary flex-col rounded-3xl mx-5 mt-10">
          <h1 className='flex mx-auto text-secondary  text-center mt-20'>Today Workout</h1>

          <div className="flex h-fl bg-primary content-evenly flex-row rounded-3xl mx-5 mt-10">
            <div className="flex w-2/12 flex-col rounded-3xl mx-5  mb-10">
              <Excercise title="Start Workout" id={exporps} buttonID={1} />
              <Excercise title="Start Workout" id={exporps} buttonID={2} />
              <Excercise title="Start Workout" id={exporps} buttonID={3} />
              <Excercise title="Start Workout" id={exporps} buttonID={4} />
              <Excercise title="Start Workout" id={exporps} buttonID={5} />
              <Excercise title="Start Workout" id={exporps} buttonID={6} />

            </div>

            <div className="flex w-10/12  flex-row rounded-3xl mx-5 mb-10">
              <Model id={id} />
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

function UserInfo({ title }: { title: string }) {
  return (
    <div className='flex flex-row bg-gray-700 motion-safe:hover:scale-110 text-center items-center justify-center  w-8/12 h-20 rounded-xl mx-auto mt-14'>
      <p>{title}</p>
    </div>
  );
}

function Excercise({ title, id, buttonID }: { title: string, id: ExcerciseProps, buttonID: number }) {

  let onclick = () => {
    id.setId(buttonID);
    console.log(id.id);
  }

  return (
    <button className='flex bg-gray-700 text-center items-center justify-center  w-8/12 h-20 rounded-xl mx-auto mt-14 motion-safe:hover:scale-110' onClick={onclick}>{title}</button>
  );
}


export default Dashboard;

