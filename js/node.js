const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// database connection and user registration/login

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
