import { useState } from "react"
import TickIcon from "./TickIcon"
import ProgressBar from "./ProgressBar"
import Modal from "./Modal"


const ListItem = ({task, getData}) => {
  const [showModal, setShowModal] = useState(false)

  const deleteItem = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVERURL}/todos/${task.id}`, {
        method: 'DELETE',
      })
      console.log(response)
      if (response.status === 200) {
        setShowModal(false)
        console.log('Data sent')
        // fetch data again after successful post
        getData()
      }
    }
    catch (error) {
      console.log(error)
    }
  }

    return (
      <li className="list-item">

        <div className="info-container">
          <TickIcon />
          <p className="task-title">{task.title}</p>
          <ProgressBar progress={task.progress} />
        </div>
        
        <div className="button-container">
          <button className="delete" onClick={deleteItem} >Delete</button>
          <button className="edit" onClick={() => setShowModal(true)} >Edit</button>

          
          {/* <button className="complete">Complete</button> */}
          {/* <button className="schedule">Schedule</button> */}
          {/* <button className="reminder">Reminder</button> */}
        </div>
      {showModal && <Modal mode={'edit'} setShowModal={setShowModal} task={task} getData={getData} />} 
      </li>

    )
  }
  
  export default ListItem