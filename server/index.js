const inventory = require("../data.json")

const express = require('express')
const app = express()
const port = 4000

const {getInventory} = require('./controller')

app.use(express.json())


app.get('/api/getInventory', getInventory
)

app.post('/api/addToCart', )


app.listen(port, ()=> console.log(`server listening on port ${port}`))

