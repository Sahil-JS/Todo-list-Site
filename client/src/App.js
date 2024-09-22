import { useEffect, useState } from 'react';
import ListHeader from './components/ListHeader';
import ListItems from './components/Listitem';
import Auth from './components/Auth';
import { useCookies } from 'react-cookie';

const App = () => {

  const [cookies, setCookie, removeCookie] = useCookies(null)
  // const [authToken, setAuthToken] = useState(false)
  const authToken = cookies.AuthToken
  const userEmail= cookies.Email
  // const [data, setData] = useState([]) // for fetching data from API
  const [tasks, settask] = useState(null)

  // const authToken = false
  

  const getData = async () => {
    // const userEmail ='sahil@test.com'     

    
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVERURL}/todos/${userEmail}`)
      const data = await response.json()
      settask(data)
      // console.log(data)
      // console.log(tasks[0])
    } catch (error) {
        console.log(error)     
    }
  }

  // console.log("this sis me");
  
  console.log(tasks)
  const sortedTasks = tasks?.sort((a,b) => new Date(a.date) - new Date(b.date));


  
   useEffect(() => {
    if (authToken) {
      getData()
    }
   }, [])


  // calling the function
  // / useEffect to run getData only once when the component mounts
  useEffect(() => { getData(); }, [])// Empty array makes it run only on moun
   
  // useEffect(() => {
  //   console.log('Tasks:', tasks); // Log tasks when state changes
  // }, [tasks]);


  return (
    <div className='app'>
      {!authToken && <Auth/>}
      {
        authToken &&
        <>
        <ListHeader listNae={'holiday tick list'} getData={getData}/>
        <p className='user-email'>Welcome back {userEmail}</p>
        {sortedTasks?.map((task) => <ListItems key={task.id} task={task} getData={getData} />)}

       
      
     </>}
     <p className='copyright'> sahil's todo yo</p>
    </div>
  )
}

export default App
