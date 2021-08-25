const express = require('express');

const app = express();

app.use('/', (req, res) => {
    res.json({ ok: true })
});

const server = app.listen(5000, () => {
    console.log(server.address());
})