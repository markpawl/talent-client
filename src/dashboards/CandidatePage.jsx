import { Link, useLocation } from "react-router-dom"
import './dashboard.css';

export default function RegisterPage() {
    const location = useLocation();
    const currentPage= location.pathname.split('/')[1];
    function nameCase(str) {
        return `${str[0].toUpperCase()}${str.slice(1)}`;
      }

  return (
    <div>
      <h3>{nameCase(currentPage)} Page</h3>
      <Link to="/">Home</Link>
        <div className="content">
            here is this page's content
        </div>
    </div>
  )
}