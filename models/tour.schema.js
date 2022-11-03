const mongoose = require('mongoose');

//  schema
const ToursSchema = mongoose.Schema({
    name: {
        type: String,
        lowercase: true,
        required: [true, "please provide a name for this Product name "],
        unique: [true, " Name Must be unique"],
        trim: true,
        minLength: 3,
        maxLength: [100, "Name is too large"],

    },
    description: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true,

    },

    district: {
        type: String,
        lowercase: true,
        required: true,
        maxLength: [20, "District name is too large"]
    },
    country: {
        type: String,
        lowercase: true,
        required: true,
        maxLength: [20, "country name is too large"]
    },
    view: {
        type: Number,

    },
    pkgprice: {
        type: Number,
        required: true,

        min: [0, " price is positive number,   can't be  {VALUE}"],
        validate: {
            validator: (value) => {
                const isInteger = Number.isInteger(value);
                if (isInteger) {
                    return true
                }
                else {
                    return false
                }
            }
        }
    }
},
    {
        timestamps: true
    })
const Tour = mongoose.model("Tour", ToursSchema)
module.exports = Tour;

