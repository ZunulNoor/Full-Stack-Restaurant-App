const express = require('express')
const app = express()
const path = require('path')

const clientpath = path.join(__dirname, './client/dist')
app.use('/', express.static(clientpath))

require('dotenv').config()
const CategoryRouter = require('./API/Category/Router')
const UserRouter = require('./API/User/Router')
const OrderRouter = require('./API/orders/Router')
const MailerRouter = require('./API/mailer/Router')
const MenuRouter = require('./API/Menu/Router')
const port = process.env.SERVER_PORt || 2500
const cors = require('cors')

app.use(express.json())
app.use(cors())
app.use('/api', CategoryRouter)
app.use('/api', UserRouter)
app.use('/api', OrderRouter)
app.use('/api', MailerRouter)
app.use('/api', MenuRouter)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/dist/index.html'))
})


// app.get('/',(req,res)=>{
//   res.send('Hello World')
// })


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})