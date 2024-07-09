import './dashboard.css';
import {Link} from 'react-router-dom';

import UserManagementPage from '../pages/UserManagementPage';

export default function ManagerPage() {
  const text = `
  This "Manager's Dashboard" page needs to be developed!

  This page should include:
  - a list of open jobs that the manager has submitted
  - jobs in the list are ones the manager is hiring for
  - the job list should include information of current status including:
    - active date(s) (when candidates can apply)
    - "open"|"interviewing"|"closed"|"filled" ...
  - manager can click on job-opening and go to a detail page for more info
  - detail page also allows manager to review and select candidates, etc.
  - detail page allows manager to adjust the job-opening's status
  - The details page "Search" button opens a search page
  - Managers can search by candidate's attributes
  - AI feature ranks applicants according to "fit" for a given job-opening
  `;
  return (
    <div>
        <div className="content">
            <pre>{text}</pre>
            Links:<br/>
            <Link onClick={()=>{alert("not implemented yet...")}} >Create a Job Opening</Link><br/>
            <Link onClick={()=>{alert("not implemented yet...")}} >See details for the selected Job Opening</Link><br/>
            ...
        </div>
    </div>
  )
}