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

    const text = `
    This is the "Home" page!
    
    This application provides a "partial" solution  
    that users can use to get started on building
    their own full-fledged Talent Management system. 

    The application also includes source code that 
    can be used as an example for building out the 
    rest of the application. 

    This REACT based front-end works along with the
    Talent back-end REST API which is also a "partial"
    solution that needs to be built-out.

    The system accepts logins from three types of users:
    - Administrator
    - Hiring_Manager
    - Candidate

    In addition, Guests can use limited functionality
    without having to log in.

    Before you start your work you should become familiar
    with the front-end user interface and the back-end API
    , their code and the techniques being used. 
      `;

    return (
        <div>
            <div className="content">
                <pre>{text}</pre>
                <button onClick={() => onEnterClick()} >Enter Site</button>
            </div>
        </div>
    )
}
