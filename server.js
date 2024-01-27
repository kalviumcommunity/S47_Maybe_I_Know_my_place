const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 3000

const uri = 'mongodb+srv://Surya:sun@asapcluster.3osvgms.mongodb.net/?retryWrites=true&w=majority';



app.get('/' ,(req,res) =>{
    mongoose.connect(uri)
    .then(() =>{
        res.json({Connection:'Connected'})

    })
    .catch((err) =>{
        res.json({Connection:'Disconnected', err})

    })
})

app.listen(port, () => {
    console.log(`server is up and runnig at port:`, port);
})


