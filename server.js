// const express = require('express')
// const app = express()
// const port = 7000
// const mongoose = require('mongoose')

// const uri = 'mongodb+srv://Surya:sun@asapcluster.3osvgms.mongodb.net/?retryWrites=true&w=majority';

// mongoose.connect(uri)
// .then(() => {
//     app.get('/', (req, res) => {
//         res.json({connection: 'Connected'})
//     })
// })
// .catch(() =>{
//     app.get('/' ,(req , res) => {
//         res.json({connection: 'Disconnected'})
//     })
// })

// // app.get('/',(req, res)=>{
// //     console.log(req.url);
// //     mongoose.connect(uri)
// //     .then(() => {
// //         res.send("connected to mongo successfully");
// //     }).catch((error)=>{
// //         res.send("got error while connecting", error);
// //     })
// // })


// app.listen(port, () => {
//     console.log("server is up and runnig at port:",port);
// })

const express = require('express');

const { startDatabase, stopDatabase, isConnected } = require('./db');
const app = express();

const port =  1000;

app.get('/', (req, res) => {
  res.json({
    ServerDatabase: isConnected() ? 'connected' : 'disconnected'
  })
});


process.on('SIGINT', async () => {
  await stopDatabase();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  await stopDatabase();
  process.exit(0);
});

if (require.main === module) {
  app.listen(port, async () => {
    await startDatabase();

    console.log(`🚀 server running on PORT`);
  });
}





module.exports = app;
