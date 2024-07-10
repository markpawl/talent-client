import { Link } from "react-router-dom"

export default function RegisterPage() {
  return (
    <div>
      <h3>Register Page</h3>
      <Link to="/">Home</Link>
      <br />
      <Link to="/register">Register</Link>
    </div>
  )
}
