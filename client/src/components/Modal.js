import { useState } from 'react';


const Modal = ({mode, setShowModal}) => {

  // const mode = 'create'
  const editMode = mode === "edit" ? true : false

  const [data, setData] = useState({
    user_email:'',
    title:'',
    progress:'',
    date: editMode ? '' : new Date()
  })




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
              lets  {mode} your task
            </h3>
            <button className="close-modal" onClick={()=> setShowModal(false)}>x</button>
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

              <input className={mode} type="submit"/>
               
              
            </form>


        {/* </div> */}
      </div>
       
      </div>
    )
  }
  
  export default Modal