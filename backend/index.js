const express = require('express')
const cors=require('cors')
const app = express()
require('dotenv').config()
require('./config/db')
const UserRoute=require('./routes/UserRoute')
const StaffRoute=require('./routes/StaffRoute')
const ServiceRoute=require('./routes/ServiceRoute')
const port = process.env.PORT || 8080

app.use(cors())
app.use(express.json())

app.use('/api',UserRoute)
app.use('/api',StaffRoute)
app.use('/api',ServiceRoute)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
