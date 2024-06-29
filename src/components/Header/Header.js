import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import "./Header.css";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


function Header() {
  const [isLogin,setIsLogin] = useState(true);
  const onlineStatus = useOnlineStatus();
  
  const loginBtnHandler=()=>{
    setIsLogin(p => !p);
  }
  console.log("Header render");
  useEffect(()=>{
    console.log("useEffect called");
  },[isLogin]);
  return (
    <div className='header'>
        <div className='logo-container'> 
          <img src={LOGO_URL} className="logo"/>
        </div>
        <ul className="nav-items">
            <li><Link to="/">Home</Link></li>
            <li> <Link to="/about">About us</Link></li>
            <li> <a href="/contact">Contact us</a></li>
            <li>Cart</li>
            <li><button onClick={loginBtnHandler}>{!isLogin ? "Login" : "Logout"}</button></li>
            <li>{onlineStatus ? "🟢": "🔴"}</li>
        </ul>
    </div>
  )
}

export default Header