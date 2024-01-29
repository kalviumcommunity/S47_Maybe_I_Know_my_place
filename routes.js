const express = require('express');
const app = express();
const data = require('./data.json');

app.use(express.json());


const get = app.get('/get', (req, res) => {
    res.send(data);
});

const post = app.post('/post', (req, res) => {
    const newData = req.body;
    console.log(req.body);
    data.push(newData);
    res.status(201).json(newData);
});

const del = app.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (id >= 0 && id < data.length) {
        data.splice(id, 1);
        res.json(data);
    } else {
        res.status(404).json({ error: "id out of bounds" });
    }
});


module.exports = { post, get, del};
