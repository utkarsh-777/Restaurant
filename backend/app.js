const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    return res.send('SERVER WORKING!');
})

app.listen(PORT, () => {
    console.log(`App listening at ${PORT}`);
})