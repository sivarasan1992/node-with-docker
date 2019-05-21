const express = require('express');
const port = process.env.PORT || 4000;

const app = express();
app.get('/', (req, res) => res.send('Hello shiva'));

app.listen(port, () => console.log(`server is running on port ${port}`));