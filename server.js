const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 3000

const uri = 'mongodb+srv://Surya:sun@asapcluster.3osvgms.mongodb.net/?retryWrites=true&w=majority';



app.get('/' ,(req,res) =>{
    mongoose.connect(uri)
    .then(() =>{
        res.json({Connection:'Connected'})
        // res.end()
    })
    .catch((err) =>{
        res.json({Connection:'Disconnected', err})
        // res.end()
    })
})

app.listen(port, () => {
    console.log(`server is up and runnig at port:`, port);
})

// mongoose.connect(uri)
// .then(() => {
//     app.get('/', (req, res) => {
//         res.json({connection: 'Connected'})
//     })
// })
// .catch((err) =>{
//     app.get('/' ,(req , res) => {
//         res.json({connection: 'Disconnected',err})
//     })
// })

// app.get('/' ,(req , res) =>{
//   res.send('<h1>Hello</h1>')
// })

