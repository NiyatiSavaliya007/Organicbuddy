const {default: mongoose} = require('mongoose');

const dbConnect = () =>{
    try{
        const conn = mongoose.connect(process.env.MONGODB_URL);
        console.log("Databse Connected Successfully");
    } catch(error){
        console.log("Databse error");
    }
};
module.exports = dbConnect;