import { useEffect, useState } from 'react';
import ListHeader from './components/ListHeader';
import ListItems from './components/Listitem';
import Auth from './components/Auth';
import { useCookies } from 'react-cookie';
import Footer from './components/footer'

const App = () => {

  const [cookies, setCookie, removeCookie] = useCookies(null)
  // const [authToken, setAuthToken] = useState(false)
  const authToken = cookies.AuthToken
  const userEmail= cookies.Email
  // const [data, setData] = useState([]) // for fetching data from API
  const [tasks, settask] = useState(null)

  // for dark mode -- 
  const [darkMode, setDarkMode] = useState(false);
  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  // Apply the theme to the body element by changing the data-theme attribute
  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [darkMode]);

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
    <div className={`app ${darkMode ? 'dark-mode' : 'light-mode'}`}>
    {/* Dark Mode Toggle Button */}
    <header>
      <button onClick={toggleDarkMode}>
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </header>
    
      {!authToken && <Auth/>}
      {
        authToken &&
        <>
        <ListHeader listNae={`Let's Get Things Done!`} getData={getData}/>
        <p className='user-email'>Welcome back {userEmail}</p>
        {sortedTasks?.map((task) => <ListItems key={task.id} task={task} getData={getData} />)}

       
      
     </>}
     <p className='copyright'>  © ToDo site by Sahil Vishwakarma</p>
     <Footer />
    </div>
  )
}

export default App
