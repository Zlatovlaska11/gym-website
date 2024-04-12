import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './elements/navbar';
import Login from './elements/login';
import Userdashboard from './elements/user-dashboard';
import Home from './elements/home';
import FourOfour from './elements/404';
import { GetUserData } from './elements/userData';

const App = () => {
  let Navigate = useNavigate()
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/:id" element={<Userdashboard />} />
        <Route path="/reg" element={<GetUserData/>} />
        <Route
          path="*"
          element={<FourOfour/>}
        />
      </Routes>
    </>
  );
};

export default App;
