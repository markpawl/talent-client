import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"
import { LoginContext } from './LoginContext';
import './FooterComponent.css'

function FooterComponent() {
  const location = useLocation();
  const navigate = useNavigate();
  
  return (
    <div className="footer">
      <Link to={'./home'}>Home</Link>
    </div>
  )
}

export default FooterComponent