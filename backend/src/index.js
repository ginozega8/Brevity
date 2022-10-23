require("dotenv").config()
const app = require("./app") //Import our app to initialize our server
require("./database")
async function main(){ //listen to our app's port and log it
    await app.listen(app.get("port"))
    console.log("Server is listening at:" + app.get("port"))
}

main(); //initialize the function