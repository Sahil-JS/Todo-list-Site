import TickIcon from "./TickIcon"
import ProgressBar from "./ProgressBar"


const ListItem = ({task}) => {
    return (
      <li className="list-item">

        <div className="info-container">
          <TickIcon />
          <p className="task-title">{task.title}</p>
          <ProgressBar />
        </div>
        
        <div className="button-container">
          <button className="delete">Delete</button>
          <button className="edit">Edit</button>
          {/* <button className="complete">Complete</button> */}
          {/* <button className="schedule">Schedule</button> */}
          {/* <button className="reminder">Reminder</button> */}
        </div>
       
      </li>
    )
  }
  
  export default ListItem