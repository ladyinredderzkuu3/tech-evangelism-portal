const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const workshops = [];

app.post('/workshops', (req, res) => {
    const workshop = req.body;
    workshops.push(workshop);
    res.status(201).send(workshop);
});

app.get('/workshops', (req, res) => {
    res.send(workshops);
});

app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});