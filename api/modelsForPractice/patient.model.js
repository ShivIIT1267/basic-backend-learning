import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    name : {
        type : String ,
        required : true
    },

    diagonosedWith : {
        type : String,
        required : true,
    },
    address : {
        type : String,
        required : true,
    },
    age : {
        type : Number,
        required : true,
    },
    bloodGroup : {
        type : String,
        required : true,
    },
    gender : {
        type : String,
        enum : ['M','F','0'],
    },
    admittedIn : {
        // when we want to take from another 
        // model, and remember we take the name of the model as given by us
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Hospital',
    },

    
}, { timestamps: true });

const patient = mongoose.model("patient", patientSchema);
