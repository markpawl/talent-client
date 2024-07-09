import './dashboard.css';

export default function RegisterPage() {
  const text = `
  This "Guest" page needs to be developed!
  
  The Guest page allows unlogged-in users to search existing job-openings.
  Job search should be similar to what Candidates use execpt that:
  - Guest users cannot apply for jobs
  - Guest users cannot save selected jobs for later viewing (favorites)
  The same screen can be used for Guest and Candidate job search except that:
  - Guests clicking on functions like save or apply should get a message:
    "please register to get access to advanced features"
    `;
  return (
    <div>
        <div className="content">
            <pre>{text}</pre>
        </div>
    </div>
  )
}