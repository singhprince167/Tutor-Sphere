import mongoose from "mongoose";
const dbUrl="mongodb+srv://prince:princelucknow@cluster0.r6ecv6k.mongodb.net/tutor_db"

const connect_db=async()=>{
    try{
        const connectionObject=await mongoose.connect(`${dbUrl}`)
        console.log(`connection established with mongo db connection details`);

    }
    catch(err){
        console.log("error while connnecting with db"+err.message);
        process.exit(1)

    }
}
export default  connect_db;