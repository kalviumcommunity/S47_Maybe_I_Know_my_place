// CRUD routes
// app.get('/get', get);
// app.post('/post', post);
// app.delete('/:id', del);

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
const mongoose = require('mongoose');
const userModel = require('./Models/User');
app.use(cors())

mongoose.connect("mongodb+srv://thesuryasingh2003:surya@cluster0.qwpokc1.mongodb.net/?retryWrites=true&w=majority", {
    dbName: "Crud"
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log("Unable to connect to MongoDB:", err);
    });

// Enable CORS
app.use(cors());
app.use(express.json());

// Create user route
app.get('/', (req, res) => {
    userModel.find({})
        .then(users => res.json(users))
        .catch(err => console.log(err))
})


app.get('/getUser/:id', (req, res) => {
    const id = req.params.id
    userModel.findById({ _id: id })
        .then(users => res.json(users))
        .catch(err => console.log(err))
})

app.put('/updateUser/:id', (req, res) => {
    const id = req.params.id
    userModel.findByIdAndUpdate({ _id: id }, {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    })
        .then(users => res.json(users))
        .catch(err => console.log(err))
})


app.post("/createUser", (req, res) => {
    userModel.create(req.body)
        .then(users => res.json(users))
        .catch(err => res.json(err));
});

app.delete('/deleteUser/:id', (req,res) =>{
    const id = req.params.id
    userModel.findByIdAndDelete({_id: id})
    .then(res => res.json(res))
    .catch(err => console.log(err))
})

const uri = 'mongodb+srv://thesuryasingh2003:sun@cluster0.cvfs8ar.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect()
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    const database = client.db('ASAP');
    const collection = database.collection('Data');

    app.get('/display', async (req, res) => {
      const result = await collection.find({}).toArray();
      res.json(result);
    })
  })
  .catch(err => {
    console.error('Error connecting to MongoDB Atlas', err);
  });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});