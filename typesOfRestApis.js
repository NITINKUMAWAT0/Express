const express = require('express');

const app = express();
const port = 9001;

app.use((req, res, next) => {
    console.log(req.method, req.ip, req.hostname);
    next();
})

app.get('/', (req, res) => {
    res.json({ type: 'GET' });
});

// POST a new user
app.post('/', (req, res) => {
    res.json({ type: 'POST' })
});

app.put('/', (req, res) => {

    res.json({ type: 'PUT' })
});

// DELETE a user by ID
app.delete('/', (req, res) => {
    res.json({ type: 'DELETE' })
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
