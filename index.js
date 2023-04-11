const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 7000;
const { MongoClient, ServerApiVersion } = require('mongodb');


app.use(express.json());
app.use(cors());



// username = CrudOperation
// password = EBU7yQOrBHiOtGMx


const uri = "mongodb+srv://CrudOperation:EBU7yQOrBHiOtGMx@cluster0.ogqtm.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});




app.get('/', (req, res) => {
    res.send("running");
})


app.listen(port, (req, res) => {
    console.log("server running on port " + port);
});
