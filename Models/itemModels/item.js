const mongoose = require( 'mongoose' );


const itemSchema = new mongoose.Schema( {
    item_id: {
        type: String
    },
    item_name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    item_image: {
        data: String,
        contentType: String
    },
    description: {
        type:String
    },
    features: {
        type: String
    },
    posted_by: {
        type: String,
        required: true
    },
    posted_date: {
        type: Date,
        default: new Date().toLocaleString()
    }
} );

const Item = mongoose.model( 'items', itemSchema );
module.exports = Item