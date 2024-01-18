const express = require('express')
const app = express()
const port = 3001
app.get('/ping' , (req, res) => {
    res.send('Hello everyone')
})

app.listen(port , () => {
    console.log('server is running');
})