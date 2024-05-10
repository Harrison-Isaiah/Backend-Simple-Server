require('dotenv').config()
const express = require('express')
const app = express()

const port = 4000

app.get('/',(req, res)=>{
    res.send('Hello World')
})

app.get('/iedge', (req, res)=>{
    res.send('iEDGE International Education')
})

app.get('/login', (req, res)=>{
  res.send('<h2>Login Required</h2>')
})

app.get('/wasif', (req, res)=>{
  res.send('<h2>Wasif is a cat</h2>')
})

app.listen(process.env.PORT ,()=>{
  console.log  (`App running on ${port}`)
})







