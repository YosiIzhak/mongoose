const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    productName: {
        type: String,
        required: false,
        unique: false,
    },
    productCategory: {
        type: String,
        required: true,
        unique: false,
    },
    isActive: {
        type: Boolean,
        required: true,
        unique: false,
    },
    details: {
        description: {
            type: String,
            minlength: 10
        },
        price: {
            type: Number,
           // required: true,
        
        },
        discount: {
            type: Number,
            required: false,
            default: 0
        },
        images: {
            type:Array,
            minlength: 2
        },
        // phoneNumber: {
        //     type: Number,
        //     required: false,
        //     unique:false,
        //     // validate(value) {
        //     //     if(value.length != 10){
        //     //         throw new Error('phone number must be valid')
        //     //     }
        //     // } 
        // },
        date: {
            type: Date,
            required: false,
            unique: false,
            default : Date.now()
        }
    }

})

const productmodel = mongoose.model('products', productSchema);
module.exports = productmodel;
// module.exports = mongoose.model('products',productSchema);
