import { Link } from "react-router-dom"

export default function RegisterPage() {
  const text = `
  This "login Account Registration" page needs to be developed!
  
  This page should include:
  - input fields for: username, password, passwordCheck & type
  - a submit button that posts the input field data to the register API
  - the register API should:
    - reject data when username already exists
    - reject passwords less than 8 characters
    - save valid registrations in the user table
  `;
  return (
    <div>
        <div className="content">
            <pre>{text}</pre>
        </div>
    </div>
  )
}
