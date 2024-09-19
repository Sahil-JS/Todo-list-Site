import Modal from "./Modal"
import { useState } from'react';



const ListHeader = ({listNae}) => {

  const [showModal, setShowModal] = useState(false)

      const signOut = () => {
        console.log("signed out")
      }



    return (
      <div className="list-header">
      <h1>{listNae}</h1> 
      <div className="button-container">
        <button className="create" onClick={() => setShowModal(true)} >Add Item</button>
        <button className="signOut" onClick={signOut}>signOut</button>
      </div>
      {showModal && <Modal mode={'create'} setShowModal={setShowModal}/>}
      </div>
    )
  }
  
  export default ListHeader
  