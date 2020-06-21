const express = require('express')
const http = require('http')
const socketio = require('socket.io')
const nodemailer = require('nodemailer')
const creds = require('./config')
const { addUser, removeUser, getUser, getUsersInRoom } = require('./users.js')

const PORT = process.env.PORT || 5000

const router = require('./router')

const app = express()

const server = http.createServer(app)
const io = socketio(server)

io.on('connection', (socket) => {
  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room })
    if (error) return callback(error)
    socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room ${user.room}` })
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name},has joined` })
    socket.join(user.room)
    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) })
    callback()

  })
  socket.on('sendMessage', (message, callback) => {

    const user = getUser(socket.id)

    io.to(user.room).emit('message', { user: user.name, text: message })
    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) })
    callback()
  })
  socket.on('disconnect', () => {
    const user = removeUser(socket.id)
    if (user)
      io.to(user.room).emit('message', { user: 'admin', text: `${user.name} has left.` })
  })
})

var transport = {
  host: 'your_host_here', // e.g. smtp.gmail.com
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error)
  } else {
    console.log('All works fine, congratz!')
  }
})
app.use(express.json());
app.post('/send', (req, res, next) => {
  const name = req.body.name
  const email = req.body.email
  const message = req.body.messageHtml


  var mail = {
    from: name,
    to: 'RECEIVING_EMAIL_ADDRESS_GOES_HERE',
    subject: 'Contact form request',

    html: message
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
})


app.use(router)
server.listen(PORT, () => console.log(`server start on ${PORT}`))