// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();
// const port = 3000;
// const route = require('./routes');
// const arr = require("./data.json");
// const { post, get, del } = require('./routes');
// const cors = require('cors')
// const UserModel = require('./Models/User.js')

// app.use(cors())
// app.use(express.json());

// const uri = 'mongodb+srv://thesuryasingh2003:sun@cluster0.cvfs8ar.mongodb.net/?retryWrites=true&w=majority';

// // Connect to MongoDB
// mongoose.connect(uri)
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch(error => {
//     console.error('Error connecting to MongoDB:', error);
//   });

// app.get('/display' , (req , res) =>{
//   UserModel.find()
//   .then(user => res.json(user))
//   // res.end(user)
//   .catch(err => res.json(err))
// })



// // CRUD routes
// app.get('/get', get);
// app.post('/post', post);
// app.delete('/:id', del);

// app.get('/', (req, res) => {
//   res.send('Server is up and running');
// });

// app.listen(port, () => {
//   console.log(`Server is up and running at port: ${port}`);
// });


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

const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors')
const app = express();
const port = 3000;

app.use(cors())

const uri = 'mongodb+srv://thesuryasingh2003:sun@cluster0.cvfs8ar.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect()
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    const database = client.db('ASAP');
    const collection = database.collection('Data');

    app.get('/display', async (req,res)=>{
    const result = await collection.find({}).toArray();
      res.json(result);
    })
  })
  .catch(err => {
    console.error('Error connecting to MongoDB Atlas', err);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);});