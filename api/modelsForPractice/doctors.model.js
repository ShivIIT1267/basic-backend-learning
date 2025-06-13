import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },

    salary : {
        type : Number,
        required : true,
    },

    qualification : {
        type : String ,
        required : true,
    },

    experienceInYears : {
        type : Number ,
        required : 0,
        default : 0,
    },
    // we do this in array,
    // by defining the type of each element
    worksInHospital  : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Hospital',
        },
    ]
}, { timestamps: true });

const doctor = mongoose.model("doctor", doctorSchema);
