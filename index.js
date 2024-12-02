require('dotenv').config()
const express = require('express')  
// import express from "express"      //alternative way of line 1
const app = express()  //app is like math which later uses math.floor, math.random
// const port = 3000

app.get('/', (req, res) => {        //request, response
  res.send('Hello World!')
})

app.get('/login', (req, res) => {        
    res.send('<h1>loginsuccessful<h1>')
  })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})