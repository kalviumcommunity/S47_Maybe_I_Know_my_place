const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const route = require('./routes');
const arr = require("./data.json");
const { post, get, del } = require('./routes');

app.use(express.json());

const uri = 'mongodb+srv://Surya:sun@asapcluster.3osvgms.mongodb.net/?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose.connect(uri)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });

// CRUD routes
app.get('/get', get);
app.post('/post', post);
app.delete('/:id', del);

app.get('/', (req, res) => {
  res.send('Server is up and running');
});

app.listen(port, () => {
  console.log(`Server is up and running at port: ${port}`);
});


// app.get('/:id' ,(req,res) =>{
//     const tt=req.params.id
//     mongoose.connect(uri)
//     .then(() =>{
//         res.json(arr[(tt)-1])

//     })
//     .catch((err) =>{
//         res.json({Connection:'Disconnected', err})

//     })
// })