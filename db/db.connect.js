const mongoose = require("mongoose");
require("dotenv").config()


const connectDatabase = async() => {
   await mongoose
        .connect(process.env.MONGOURI)
        .then(() => console.log("Mongodb connected"))
        .catch((error) => console.log(error));
}

module.exports={connectDatabase}