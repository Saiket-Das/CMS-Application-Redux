require("dotenv").config();
const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nlcdkup.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

const run = async () => {
  try {
    const db = client.db("moon_tech");
    const productCollection = db.collection("content");

    app.get("/api/content", async (req, res) => {
      const cursor = productCollection.find({});
      const product = await cursor.toArray();

      res.send({ status: true, data: product });
    });

    app.post("/api/content", async (req, res) => {
      const product = req.body;

      const result = await productCollection.insertOne(product);

      res.send(result);
    });

    app.patch("/api/content/:id", async (req, res) => {
      const id = req.params.id;

      const updatedContent = req.body;
      console.log(updatedContent);

      const result = await productCollection.updateOne(
        { _id: ObjectId(id) },
        updatedContent
      );
      console.log(result);
      res.send(result);
    });

    app.delete("/api/content/:id", async (req, res) => {
      const id = req.params.id;

      const result = await productCollection.deleteOne({ _id: ObjectId(id) });
      res.send(result);
    });
  } finally {
  }
};

run().catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("CMS Application!");
});

app.listen(port, () => {
  console.log(`CMS app listening on port ${port}`);
});
