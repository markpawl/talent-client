import './dashboard.css';
import {Link} from 'react-router-dom';

export default function CandidatePage() {
  const text = `
  This "Candidate Dashboard" page needs to be developed!
  
  This page should include:
  - a list of jobs the logged-in user selected
  - jobs in the list are ones the user is planning to or has applied for
  - the job list should include application status
  - user can click on an applied-for job and go to a detail page with more info
  - a "Search" button that navigates to an "open jobs search page"
    - reject data when username already exists
    - reject passwords less than 8 characters
    - save valid registrations in the user table
  `;
  return (
    <div>
        <div className="content">
            <pre>{text}</pre>
            Links:<br/>
            <Link onClick={()=>{alert("not implemented yet...")}} >Search Job Openings</Link><br/>
            <Link onClick={()=>{alert("not implemented yet...")}} >Apply to a Job Opening</Link><br/>
            <Link onClick={()=>{alert("not implemented yet...")}} >Update the selected application</Link><br/>
            <Link onClick={()=>{alert("not implemented yet...")}} >Cancel the selected application</Link><br/>
            ...
        </div>
    </div>
  )
}