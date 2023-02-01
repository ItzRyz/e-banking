import { MongoClient, ServerApiVersion } from 'mongodb'

let indexesCreated = false;
async function createIndexes(client) {
  if (indexesCreated) return client;
  const db = client.db();
  await Promise.all([
    db.collection('users').createIndexes([
      { key: { email: 1 }, unique: true },
      { key: { password: 1 }, unique: true },
      { key: { fullname: 1 }, unique: true },
      { key: { phonenumber: 1 }, unique: true },
      { key: { username: 1 }, unique: true },
    ]),
  ]);
  indexesCreated = true;
  return client;
}

export async function getMongoClient() {
  if (!global.mongoClientPromise) {
    const client = new MongoClient("mongodb+srv://Ryze:<password>@ebanknjs.kijf2jk.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1
    });
    global.mongoClientPromise = client
      .connect()
      .then((client) => createIndexes(client));
  }
  return global.mongoClientPromise;
}

export async function getMongoDb() {
  const mongoClient = await getMongoClient();
  return mongoClient.db();
}