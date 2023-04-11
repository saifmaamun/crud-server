const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 7000;


app.use(express.json());
app.use(cors());




app.get('/', (req, res) => {
    res.send("running");
})


app.listen(port, (req, res) => {
    console.log("server running on port " + port);
});
