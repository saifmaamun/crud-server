const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 7000;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');


app.use(express.json());
app.use(cors());



// username = CrudOperation
// password = EBU7yQOrBHiOtGMx


const uri = "mongodb+srv://CrudOperation:EBU7yQOrBHiOtGMx@cluster0.ogqtm.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });



async function run() {
    try {
      const database = client.db("CrudOperation");
      const usersdata = database.collection("user");
      

    //   get all data
    app.get("/users", async (req, res) => {
        const query = {};
        const cursor = usersdata.find(query);
        const results = await cursor.toArray()
        res.send(results);

    })
    //   post a data
    app.post("/users", async(req, res) => {
        const user = req.body
        const result = await usersdata.insertOne(user);
        res.send(result);
        console.log(user)
    })
    // delete a data
    app.delete("/users/:id", async (req, res) => {
        const id = req.params.id;
        const query= {_id: new ObjectId(id)}
        const result = await usersdata.deleteOne(query);
        if (result.deletedCount === 1) {
            console.log("Successfully deleted one document.");
            res.send(result);
          } 
    })
      
    } finally {
    //   await client.close();
    }
  }
  run().catch(console.dir);








app.get('/', (req, res) => {
    res.send("running");
})


app.listen(port, (req, res) => {
    console.log("server running on port " + port);
});
