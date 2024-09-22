import { useState } from 'react';
import { useCookies } from'react-cookie';


const Modal = ({mode, setShowModal, getData, task}) => {

  const [cookies, setCookie, removeCookie] = useCookies(null)

  // const mode = 'create'
  const editMode = mode === "edit" ? true : false

  const [data, setData] = useState({
    user_email:editMode ? task.user_email : cookies.Email ,
    title:editMode ? task.title : null,
    progress: editMode ? task.progress  : 40,
    date: editMode ? task.date : new Date()
  })
  

  const postData = async (e) => {
    e.preventDefault()
    try {
     const response = await fetch(`${process.env.REACT_APP_SERVERURL}/todos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
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


  const editData = async (e) => {
    e.preventDefault()
    try {
     const response = await fetch(`${process.env.REACT_APP_SERVERURL}/todos/${task.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
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





const handleChange = (e) => {
  // console.log("this is smem")
  // console.log("handle change",e)
  const { name, value} = e.target

  setData(data => ({
  ...data,
  [name] : value //if it will be progress or title it will accordingly set value 

  
})
)

console.log(data)
}


    return (
      <div className="overlays">
        <div className="modal">

          <div className="form-title-container"> 
            <h3>
              let's  {mode} your task
            </h3>
            <button className="close-modal" onClick={()=> setShowModal(false)}>X</button>
            </div>


            <form>
              <input
              required
              maxLength={30}
              placeholder="your task goes here"
              name="title"
              value={data.title}
              onChange={handleChange}
              />
              <br/>

              <label htmlFor="range">Drag to select your current progress</label>
              <input 
              required
              type="range"
              id="range"
              min='0'
              max="100"
              name="progress"
              value={data.progress}
              onChange={handleChange}
              />

              <input className={mode} type="submit" onClick={editMode? editData : postData}
              />
               
              
            </form>


        {/* </div> */}
      </div>
       
      </div>
    )
  }
  
  export default Modal