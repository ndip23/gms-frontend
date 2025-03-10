import './App.css';
import{Routes,Route,useNavigate} from 'react-router-dom';
import Home from './Pages/Home/home';
import Dashboard from './Pages/Dashboard/Dashboard';
import Sidebar from './Components/Sidebar/Sidebar';
import { useState,useEffect } from 'react';
import Member from './Pages/Member/Member';
import GeneralUser from './Components/GeneralUser/Generaluser';
import MemberDetail from './Pages/MemberDetail/MemberDetail';
function App() {

  const navigate= useNavigate();
  const[isLogin, setIsLogin] = useState(false)
  useEffect(() => {
    let isLogedin = sessionStorage.getItem("isLogin");
    if(isLogedin){
      setIsLogin(true)
      //navigate('/dashboard')
    }else {
      setIsLogin(false);
      navigate('/');
    }
  
  },[sessionStorage.getItem("isLogin")])

  return (
    <div className="flex">
      {
        isLogin && <Sidebar/>
      }

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/member" element={<Member/>}/>
        <Route path="/specific/:page" element={<GeneralUser/>}/>
        <Route path="/member/:id" element={<MemberDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
