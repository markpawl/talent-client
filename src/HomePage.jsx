import { useNavigate } from "react-router-dom"
import { LoginContext } from './LoginContext';
import { useContext } from "react";
import './HomePage.css';

export default function HomePage() {
    const { isLoggedIn, user, username, login, logout } = useContext(LoginContext);
    const navigate = useNavigate();

    function onEnterClick() {
        const type = (isLoggedIn === false) ? "guest" : user.type;
        switch (type) {
            case "guest":
                navigate("/guest")
                break;

            case "Hiring_Manager":
                navigate("/manager")
                break;

            case "Candidate":
                navigate("/candidate")
                break;

            case "Administrator":
                navigate("/admin")
                break;

            default:
                break;
        }
    }

    return (
        <div>
            <div className="content" style={{height:200}} >
                <button onClick={() => onEnterClick()} >Enter Site</button>
            </div>

        </div>
    )
}
