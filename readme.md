npm init (-y for yes) --innitialize an app through npm utility

"start": "node index.js" --in package.json scripts to set command to start

npm install express --to install express

const express = require('express')  
// import express from "express"
alternative way of line 1 and not works when file is not in a module

app.get('/', (req, res) => {        //request, response
  res.send('Hello World!')
})
app.get is a function having parameters a string which is basically a route and a callback having parameters res and req 

npm i dotenv
create a file as '.env'

A .env file is used to store environment variables for an application in a key-value pair format. These variables can include sensitive data or configuration settings that are essential for the application to function properly but should not be hardcoded into the source code.