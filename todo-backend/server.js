const express = require('express')
const cors = require('cors')
const { Pool } = require('pg')

const app = express()
const port = 4000

app.use(cors())
app.use(express.json())

// Connect to PostgreSQL
const pool = new Pool({
  user: 'your_username',
  host: 'localhost',
  database: 'todo_db',
  password: 'your_password',
  port: 5432
})

// Test route
app.get('/', (req, res) => {
  res.send('Hello from backend!')
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})