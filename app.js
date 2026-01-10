const{MongoClient}=require('mongodb');
const uri=require('./atlas_url.js').uri;
console.log(uri);

const client = new MongoClient(uri);//object creation
const dbname="tejsaimylavarapu05_db_user";

const connectToDatabase=async()=>{ //async function
  try{
    await client.connect();
    console.log("Connected to database");
    const db=client.db(dbname);
    return db;
  }catch(err){
    console.error("Database connection error:",err);
  }
}

(async () => {
  const db = await connectToDatabase();
  if(db) {
    console.log("Database ready for operations");
    // Connection stays open for operations
  }
})();