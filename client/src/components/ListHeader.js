import Modal from "./Modal"
import { useState } from'react';
import { useCookies } from "react-cookie";



const ListHeader = ({listNae, getData}) => {

  const [cookies, setCookie, removeCookie] = useCookies(null)

  const [showModal, setShowModal] = useState(false)

      const signOut = () => {
        console.log("signed out")
        removeCookie('AuthToken')
        removeCookie('Email')
        window.location.reload() 
      }



    return (
      <div className="list-header">
      <h1>{listNae}</h1> 
      <div className="button-container">
        <button className="create" onClick={() => setShowModal(true)} >Add Item</button>
        <button className="signOut" onClick={signOut}>signOut</button>
      </div>
      {showModal && <Modal mode={'create'} setShowModal={setShowModal} getData={getData}/>}
      </div>
    )
  }
  
  export default ListHeader
  