import { useEffect, useState } from 'react';
import ListHeader from './components/ListHeader';
import ListItems from './components/Listitem';

const App = () => {

  // const [data, setData] = useState([]) // for fetching data from API
  const [tasks, settask] = useState(null)
  

  const getData = async () => {
    const userEmail ='sahil@test.com'     

    
    try {
      const response = await fetch(`http://localhost:8000/todos/${userEmail}`)
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


  

  // calling the function
  // / useEffect to run getData only once when the component mounts
  useEffect(() => { getData(); }, [])// Empty array makes it run only on moun
   
  // useEffect(() => {
  //   console.log('Tasks:', tasks); // Log tasks when state changes
  // }, [tasks]);


  return (
    <div className='app'>
     <ListHeader listNae={'holiday tick list'}/>
     {sortedTasks?.map((task) => <ListItems key={task.id} task={task} />)}
     
    </div>
  )
}

export default App
