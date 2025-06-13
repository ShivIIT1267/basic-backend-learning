import mongoose from "mongoose";

const equipmentSchema = new mongoose.Schema ({
    equipment : {
        type : String,
        required : true,
    },
    quantity : {
        type : Number,
        required : true,
    }
})

const hospitalSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    addressLine1 : {
        type : String,
        required : true,
    },
    addressLine2 : {
        type : String,
        required : true,
    },
    city : {
        type : String,
        required : true,
    },
    Pincode : {
        type : String,
        required : true,
    },
    // we want array so this way we can define it,
    // if we also want any specific or new way
    // we can use by defining above
    specializedIn : [
        {
            type : String
        }
    ],

    equipmentAvailable : [{
        type : equipmentSchema
    }
    ]
}, { timestamps: true });

const hospital = mongoose.model("hospital", hospitalSchema);
