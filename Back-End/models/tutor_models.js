import mongoose from "mongoose";

const tutorSchema= new mongoose.Schema(
    {
        
            id: {type:String,required:true},
            password: {type:String,required:true},
            name: {type:String,required:true},
            email: {type:String,required:true},
            phone:{type:Number,required:true},
            experience:{type:String,required:true},
            qualification:{type:String,required:true},
            skill:{type:String,required:true},
            city:{type:String,required:true},
            Standard:{type:String,required:true},
            board:{type:String,required:true},
            gender:{type:String,required:true}

    }
)

const TutorModel=mongoose.model("tutorReg",tutorSchema);
export default TutorModel;