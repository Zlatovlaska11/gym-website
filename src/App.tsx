import { Routes, Route } from 'react-router-dom';
import Navbar from './elements/navbar';
import Login from './elements/login';
import Userdashboard from './elements/user-dashboard';
import Home from './elements/home';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<Userdashboard />} />
      </Routes>
    </>
  );
};

export default App;
