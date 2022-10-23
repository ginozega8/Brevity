const mongoose = require("mongoose") //Mongoose module

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.grmhuue.mongodb.net/keepclone?retryWrites=true`; //Create URI

main().catch(err => console.log(err)); //Catch error in case of failure
main().then(() => console.log("DB conected")) //Log conection if success

async function main() { //connect to the DB
    await mongoose.connect(uri); //Conexión
  }