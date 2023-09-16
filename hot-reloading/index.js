const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/todos', async (req, res) => {
    const { data: todos } = await axios.get('https://jsonplaceholder.typicode.com/todos');

    res.json(todos);
});

app.post('/todos', async (req, res) => {
    const { data: todo } = await axios.post('https://jsonplaceholder.typicode.com/todos', req.body);

    res.json(todo);
});

app.put('/todos/:id', async (req, res) => {
    const { data: todo } = await axios.put(`https://jsonplaceholder.typicode.com/todos/${req.params.id}`, req.body);

    res.json(todo);
});

app.delete('/todos/:id', async (req, res) => {
    const { data: todo } = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${req.params.id}`);

    res.json(todo);
});

app.listen(3000, () => {
    console.log('Server running at 3000!');
});
