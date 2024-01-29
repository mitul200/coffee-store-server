const express = require('express')
const cors = require('cors')
require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express()
const port = process.env.PORT ||5000


// resent 
// coffeeMaster
// 8Ft2krsNDUL0cqQ4


// middleWare -----------//
app.use(express())
app.use(cors())



console.log(process.env.DB_USERS)
console.log(process.env.DB_PASS)

const uri = `mongodb+srv://${process.env.DB_USERS}:${process.env.DB_PASS}@cluster0.n0w8anz.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri)

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    app.post('/', async(req,res)=>{
      
    })


    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);






app.get('/', (req, res) => {
  res.send('coffee server is runing!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})