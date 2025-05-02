const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5001;

//enables cross-orgin as client is PORT 3000 & server is PORT 5001
app.use(cors());

// Parse incoming JSON data from body of http request
app.use(express.json());


app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`)
});