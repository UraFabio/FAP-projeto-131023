const express = require('express')
const app = express()
const mysql2 = require('mysql2')
const bodyParser = require('body-parser')

const routes = require('./routes')
const database = require('./db')
const user = require('./models/userModel')


app.use(bodyParser.urlencoded({extended:true}))

app.use(routes)

app.use(express.json)


app.listen(3003,()=>{
    console.log("Servidor rodando...")
})

database.sync()

