const PORT = process.env.PORT ?? 8000
const express = require('express')
const cors = require('cors')
const app = express()
const pool = require('./db')
// OR -- const db = require('./db')

app.use(cors())
 


app.get('/todos/:userEmail', async (req, res) => {
  
  console.log('this is req')
  console.log(req.params)
  
  // const userEmail = req.params.userEmail
  // or
  const { userEmail } = req.params //good practise
  
 
  try {
    const todos_l = await pool.query('SELECT * FROM todos WHERE user_email = $1',[userEmail])
    res.json(todos_l.rows)
    console.log(todos_l.rows)
  } catch (err) {
    console.log(err)
  }
 
})

app.listen(PORT,( ) => console.log(`Server is running at ${PORT} - http://localhost:8000/`))